import { SignedIn, SignInButton,UserButton, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60" >
        <nav>
            <Link href="/">
                <Image src="/MentorA logo.png" alt="MentorA Logo" width={200} height={60} className="h-12 py-1 w-auto object-contain"
                />
           </Link>

            <div>
              <SignedIn>
                <Link href={'/dashboard'}>
                  <Button>
                    <LayoutDashboard className="h-4 w-4"/>
                    Industry Insights
                  </Button>
                </Link>
              </SignedIn>
            </div>


        </nav>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </header>
  );
};

export default Header