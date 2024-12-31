import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function Contactusalert() {
    return (
      <div className="text-white">
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default"  className="bg-slate-900 text-white hover:bg-slate-900 border-none rounded-xl">Send Message</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmation Alert (After Submission):</AlertDialogTitle>
            <AlertDialogDescription>Thank you for reaching out! Your message has been sent successfully. We will get back to you soon. </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
            <AlertDialogAction  className="bg-slate-900 text-white hover:bg-slate-900 border-none rounded-xl">Thanks!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </div>
    )
  }
  