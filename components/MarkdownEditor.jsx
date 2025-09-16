"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Edit3, Download, Wand2, Save } from 'lucide-react';
import { toast } from 'sonner';

const MarkdownEditor = ({ 
  initialContent = '', 
  onSave, 
  onExportPDF, 
  onEnhanceSection,
  isLoading = false 
}) => {
  const [content, setContent] = useState(initialContent);
  const [activeTab, setActiveTab] = useState('edit');
  const [isSaving, setIsSaving] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const handleSave = async () => {
    if (!onSave) return;
    
    setIsSaving(true);
    try {
      await onSave(content);
      toast.success('Resume saved successfully!');
    } catch (error) {
      toast.error('Failed to save resume');
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportPDF = async () => {
    if (!onExportPDF) return;
    
    try {
      await onExportPDF(content);
      toast.success('PDF exported successfully!');
    } catch (error) {
      toast.error('Failed to export PDF');
      console.error('Export error:', error);
    }
  };

  const enhanceSection = async (sectionContent) => {
    if (!onEnhanceSection) return sectionContent;
    
    try {
      const enhanced = await onEnhanceSection({
        section: selectedSection,
        content: sectionContent
      });
      toast.success(`${selectedSection} section enhanced!`);
      return enhanced;
    } catch (error) {
      toast.error('Failed to enhance section');
      console.error('Enhancement error:', error);
      return sectionContent;
    }
  };

  // Simple markdown to HTML converter for preview
  const markdownToHtml = (markdown) => {
    return markdown
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 text-gray-700">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2 text-gray-600">$1</h3>')
      .replace(/^\* (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br/>')
      .replace(/^(.+)$/, '<p class="mb-4">$1</p>');
  };

  const getPreviewContent = () => {
    if (!content) return '<p class="text-gray-500">Start typing your resume content...</p>';
    return markdownToHtml(content);
  };

  const sections = [
    'Professional Summary',
    'Professional Experience',
    'Education',
    'Core Skills',
    'Certifications',
    'Projects'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
        <Button
          onClick={handleSave}
          disabled={isSaving || isLoading}
          variant="default"
          size="sm"
        >
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? 'Saving...' : 'Save Resume'}
        </Button>
        
        <Button
          onClick={handleExportPDF}
          disabled={isLoading}
          variant="outline"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </Button>

        <div className="flex items-center gap-2">
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="px-3 py-1 border rounded text-sm"
          >
            <option value="">Select section to enhance</option>
            {sections.map(section => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
          
          <Button
            onClick={() => {
              if (selectedSection && onEnhanceSection) {
                enhanceSection(content).then(enhanced => {
                  if (enhanced !== content) {
                    setContent(enhanced);
                  }
                });
              }
            }}
            disabled={!selectedSection || isLoading}
            variant="outline"
            size="sm"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Enhance with AI
          </Button>
        </div>
      </div>

      {/* Editor/Preview Tabs */}
      <Card className="min-h-[600px]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Resume Editor</CardTitle>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="edit" className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  Edit
                </TabsTrigger>
                <TabsTrigger value="preview" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="edit" className="mt-0">
              <div className="space-y-2">
                <div className="text-sm text-gray-600 mb-2">
                  Use Markdown formatting: # for headings, ** for bold, * for italic, - for bullet points
                </div>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="# Your Name

## Contact Information
- Email: your.email@example.com
- Phone: (123) 456-7890
- LinkedIn: linkedin.com/in/yourname

## Professional Summary
Write a compelling 2-3 sentence summary of your professional background...

## Professional Experience

### Job Title | Company Name | Dates
- Achievement 1 with quantifiable results
- Achievement 2 with impact
- Key responsibility with metrics

## Education

### Degree | University | Year
- Relevant coursework or achievements

## Core Skills
- Technical Skills: List your technical skills
- Soft Skills: Communication, Leadership, etc."
                  className="min-h-[500px] font-mono text-sm resize-none"
                  disabled={isLoading}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="mt-0">
              <div className="border rounded-lg p-6 bg-white min-h-[500px] max-w-none">
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: getPreviewContent() 
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Markdown Cheat Sheet */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Markdown Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Headers:</strong>
              <code className="block bg-gray-100 p-1 mt-1"># Main Title</code>
              <code className="block bg-gray-100 p-1">## Section</code>
              <code className="block bg-gray-100 p-1">### Subsection</code>
            </div>
            <div>
              <strong>Text Formatting:</strong>
              <code className="block bg-gray-100 p-1 mt-1">**Bold text**</code>
              <code className="block bg-gray-100 p-1">*Italic text*</code>
            </div>
            <div>
              <strong>Lists:</strong>
              <code className="block bg-gray-100 p-1 mt-1">- Bullet point</code>
              <code className="block bg-gray-100 p-1">1. Numbered item</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkdownEditor;