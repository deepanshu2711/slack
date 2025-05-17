import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "sonner";

import { useSignUp } from "@/hooks/mutations/auth/useSIgnUp";
import { SignUpSchema } from "@/utils/validators/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, isPending } = useSignUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = SignUpSchema.safeParse({ email, password, confirmPassword });
    if (!parsed.success) {
      parsed.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }
    mutate({ email, password });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Input
            disabled={false}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size={"lg"} disabled={false}>
            {isPending ? "Loading" : "Continue"}
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            size={"lg"}
            className="w-full relative"
            variant={"outline"}
          >
            <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            size={"lg"}
            className="w-full relative"
            variant={"outline"}
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
