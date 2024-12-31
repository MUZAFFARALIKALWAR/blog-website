
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import { Contactusalert } from "./alert"


export default function Form() {
  return (
    <div className="w-full flex justify-center items-center mt-32 mb-20">
    <Card className="w-[90%] max-w-screen-sm bg-white">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form below to get in touch with us. We&apos;ll respond to your message as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter Your Name.." 
              className="rounded-lg text-gray-500"/>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Abc@gmail.com" 
              className="rounded-lg text-gray-500"/>
               
               <Textarea cols={10} rows={5} placeholder="Message..." 
               className="text-gray-500"/>
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-white cursor-pointer">
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                  <SelectItem value="United">United States</SelectItem>
                  <SelectItem value="England">England</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="sveltekit">Nepal</SelectItem>
                  <SelectItem value="astro">West Indies</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button  className="rounded-xl" variant="outline">Cancel</Button>
        <Contactusalert/>

      </CardFooter>
    </Card>
  
    </div>
  )
}
// onclick 
