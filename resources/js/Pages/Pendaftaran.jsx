import React from "react";

import MainLayout from "@/Layouts/MainLayouts";

"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ShineBorder } from "../../../components/magicui/shine-border";
 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Switch} from "../components/ui/switch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const FormSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    nim: z.string().min(2, { message: "NIM must be at least 2 characters." }),
    alamat: z.string().min(2, { message: "Alamat must be at least 2 characters." }),
    orangtua: z.string().min(2, { message: "Orang Tua must be at least 2 characters." }),
});

export default function Pendaftaran() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            nim: "",
            alamat: "",
            orangtua: "",  
        },
    })
    function onSubmit(data) {
        toast("You submitted the following values", {
        description: (
            <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }
    return (
        <>
            <div className="container mx-auto p-4">
                <Card className="relative overflow-hidden min-h-[300px]">
                <ShineBorder
  shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
  className="absolute inset-0 pointer-events-none rounded-xl animate-shine"
  style={{
    backgroundImage: "linear-gradient(90deg, #A07CFE, #FE8FB5, #FFBE7B)",
    backgroundSize: "300% 300%",
    backgroundRepeat: "no-repeat",
    borderRadius: "12px"
  }}
/>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Pendaftaran</CardTitle>
                    <CardDescription className="mb-4">Isilah formulir-formulir berikut!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama</FormLabel>
                            <FormControl>
                            <Input placeholder="Nama" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nim"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>NIM</FormLabel>
                            <FormControl>
                            <Input placeholder="NIM" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                        <FormField
                            control={form.control}
                            name="alamat"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alamat</FormLabel>
                                <FormControl>
                                <Input placeholder="Alamat" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="orangtua"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Orang Tua</FormLabel>
                                <FormControl>
                                <Input placeholder="Orang Tua" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Select>
                        <SelectGroup>
                            <SelectLabel>Jenis Kelamin</SelectLabel>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Jenis Kelamin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="laki-laki">Laki-Laki</SelectItem>
                                    <SelectItem value="perempuan">Perempuan</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </SelectGroup>
                        </Select>
                            <Button type="submit">Daftar</Button>
                        </form>
                    </Form>
                </CardContent>
                
                </Card> 
            </div>
        </>
        
    );
} 

Pendaftaran.layout = page => <MainLayout children={page} />;