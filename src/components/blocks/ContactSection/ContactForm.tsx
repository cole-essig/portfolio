import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

// ContactForm.tsx
const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    console.log("Form submitted:", data);
  };

  return(
    <div 
      className="w-[30vw] h-[60vh] bg-gray-800 rounded-[12px] p-[60px]
      shadow-[0_4px_12px_rgba(255,255,255,0.06)]"
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="bg-gray-600 border-none font-bold !placeholder-white p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your Email" {...field} className="bg-gray-600 border-none font-bold !placeholder-white p-4"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="w-full min-h-[200px] text-white font-bold !placeholder-white p-4 resize-none bg-gray-600 border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="ghost"
            className="w-full text-white font-bold border-none p-6 text-[22px] font-bold
            transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]
            hover:transform hover:-translate-y-[5px] hover:scale-[1.02] mt-[80px]
            hover:shadow-[0_10px_30px_rgba(0,240,255,0.45),0_0_60px_rgba(255,255,255,0.08)]
            backdrop-blur-md cursor-pointer"
          >
            Send Message
          </Button>

        </form>
      </Form>
    </div>
  )
}

export default ContactForm;