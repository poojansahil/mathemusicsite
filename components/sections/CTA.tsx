'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  school: z.string().min(2, { message: 'School name must be at least 2 characters.' }),
  eventType: z.string().min(1, { message: 'Please select an offering.' }),
  message: z.string().min(10, { message: 'Please share a bit more context (min 10 characters).' }),
});

export default function CTA() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', school: '', eventType: '', message: '' },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast.success('Message received!', {
      description: "Poojan will be in touch with you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="section-padding gradient-yellow-peach relative overflow-hidden">
      {/* Subtle floating symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {['∫', 'π', '♪'].map((sym, i) => (
          <span
            key={i}
            className="absolute font-bold opacity-[0.04] text-[rgb(var(--dark-blue))]"
            style={{
              fontSize: 140,
              top: i === 0 ? '5%' : i === 1 ? '60%' : '20%',
              left: i === 0 ? '2%' : i === 1 ? '85%' : '78%',
            }}
          >
            {sym}
          </span>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow text-[rgb(var(--dark-blue))]/60"
            >
              § Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[rgb(var(--dark-blue))] mt-3 mb-3"
            >
              Bring Math-e-Music to Your School
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[rgb(var(--dark-blue))]/70 max-w-xl mx-auto"
            >
              Ready to book a live performance or explore the Learn With Music workshop? Share your details and Poojan will be in touch.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Card className="bg-white shadow-xl border-none">
              <CardContent className="p-7 md:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Pooja Sharma" {...field} />
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="you@school.edu.in" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>School / Organisation</FormLabel>
                            <FormControl>
                              <Input placeholder="Vasant Valley School" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>I'm interested in</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an offering" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="performance">
                                  Live School Performance (from ₹20,000)
                                </SelectItem>
                                <SelectItem value="workshop">
                                  Learn With Music Workshop (₹60,000–₹75,000)
                                </SelectItem>
                                <SelectItem value="other">Special Event / Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us a bit more</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Student age group, specific topics, preferred dates, anything else that helps..."
                              className="min-h-[110px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[rgb(var(--dark-blue))] text-white hover:bg-[rgb(var(--dark-blue))]/90 font-semibold py-6"
                    >
                      Send Message
                    </Button>

                    <p className="text-center text-xs text-[rgb(var(--dark-blue))]/50 mt-2">
                      Or email directly:{' '}
                      <a
                        href="mailto:poojansahil@gmail.com"
                        className="underline hover:text-[rgb(var(--dark-blue))]"
                      >
                        poojansahil@gmail.com
                      </a>
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
