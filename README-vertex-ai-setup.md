# Vertex AI Setup for Future-Proofing Analysis

## Environment Variables

Add these environment variables to your `.env.local` file:

```bash
# Google Cloud Vertex AI Configuration
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account-key.json
```

## Google Cloud Setup

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Note your project ID

2. **Enable Vertex AI API**
   ```bash
   gcloud services enable aiplatform.googleapis.com
   ```

3. **Create Service Account**
   ```bash
   gcloud iam service-accounts create vertex-ai-service \
     --description="Service account for Vertex AI" \
     --display-name="Vertex AI Service"
   ```

4. **Grant Permissions**
   ```bash
   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:vertex-ai-service@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/aiplatform.user"
   ```

5. **Create and Download Key**
   ```bash
   gcloud iam service-accounts keys create vertex-ai-key.json \
     --iam-account=vertex-ai-service@YOUR_PROJECT_ID.iam.gserviceaccount.com
   ```

## Installation

Install the required package:

```bash
npm install @google-cloud/vertexai
```

## Features

The Future-Proofing Dashboard provides:

- **Overall Future-Proofing Score**: Comprehensive career resilience assessment
- **Automation Risk Analysis**: Identifies vulnerable and protected tasks
- **Growth Opportunities**: Emerging career paths and required skills
- **Adaptation Strategies**: Prioritized actions for career development
- **Interactive Visualizations**: Score circles and progress indicators

## Usage

The component automatically analyzes the user's profile when loaded and provides AI-powered insights using Google's Vertex AI Gemini model.

## Development Mode

If Vertex AI is not configured, the system will return mock data for development purposes.
