"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().min(2).max(50),
	password: z.string().min(2).max(50),
});

export function SignInButton() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<>
			<Dialog>
				<DialogTrigger className="bg-red-20">SignIn</DialogTrigger>
				<DialogContent className="bg-white p-5 lg:p-8">
					<div>
						<DialogHeader className="mb-4 flex flex-col items-start">
							<DialogTitle>
								<h3 className="text-3xl ">Sign in</h3>
							</DialogTitle>
							<DialogDescription>to explore the Template.</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col space-y-4">
							<Button variant="outline" className="w-full">
								Continue with Google
							</Button>

							<span className="flex items-center">
								<hr className="bg-gray-200 w-full" />
								<span className="px-5">or</span>
								<hr className="bg-gray-200 w-full" />
							</span>

							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input placeholder="shadcn" {...field} />
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input placeholder="shadcn" {...field} />
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<Button type="submit" className="w-full py-6">
										Submit
									</Button>
								</form>
							</Form>

							<div className="flex flex-col md:flex-row  items-center md:justify-between text-sm">
								<p>No account? Sign up</p>
								<p>Forget password? Reset password</p>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
