import { SignedIn, SignInButton,UserButton, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from"./ui/dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { DropdownMenuLabel } from "./ui/dropdown-menu";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";


const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60" >
        <nav className="conatiner mx-auto px-4 h-16 flex items-center justify justify-between">
            <Link href="/">
                <Image src="/MentorA logo.png" alt="MentorA Logo" width={200} height={60} className="h-12 py-1 w-auto object-contain"
                />
           </Link>

            <div className="flex items-center space-x-2 md:space-x-4">
              <SignedIn>
                <Link href={'/dashboard'}>
                  <Button variant="outline">
                    <LayoutDashboard className="h-4 w-4"/>
                    <span className="hidden md:block">Industry Insights</span>
                  </Button>
                </Link>
                

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button>
                      <StarIcon className="h-4 w-4"/>
                      <span className="hidden md:block">Growth tools</span>
                      <ChevronDown className="h-4 w-4"/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href={"/resume"} className="flex items-center gap-2">
                        <FileText className="h-4 w-4"/>
                        Build Resume
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/cover-letter"} className="flex items-center gap-2">
                        <PenBox className="h-4 w-4"/>
                        Cover Letter
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/interview"} className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4"/>
                        Interview Prep
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SignedIn>

              <SignedOut>
                <SignInButton>
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements:{
                      avatarBox:"w-10 h-10",
                      userButtonPopoverCard:"shadow-x1",
                      userPreviewMainIdentifier:"font-semibold",
                    },
                  }}
                  afterSignOutUrl="/" 
                />
              </SignedIn>
            </div>
        </nav> 
    </header>
  );
};

export default Header