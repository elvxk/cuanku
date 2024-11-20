"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Logo from "@/components/Logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen gap-4">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <Card className="bg-white mx-4 md:mx-0">
                  <CardHeader>
                    <div className="flex flex-col justify-center w-full items-center gap-4 my-2">
                      <Logo />
                      <Separator className="bg-black" />
                    </div>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                      Welcome back! Please sign in to continue
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-x-4">
                      <Clerk.Connection name="github" asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading scope="provider:github">
                            {(isLoading) =>
                              isLoading ? (
                                "Loading ..."
                              ) : (
                                <div className="flex items-center gap-2">
                                  <FaGithub /> GitHub
                                </div>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name="google" asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                "Loading ..."
                              ) : (
                                <div className="flex items-center gap-2">
                                  <FaGoogle /> Google
                                </div>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>
                  </CardContent>
                </Card>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}
