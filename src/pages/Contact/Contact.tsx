import { useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { ContactSchema } from '../../utils/contactSchema';
import PageTransition from '../../components/PageTransition';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineOutlined';

type ContactSchemaType = z.infer<typeof ContactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema) as Resolver<ContactSchemaType>,
    mode: 'onSubmit',
  });

  const onSubmit = (data: ContactSchemaType) => {
    console.log('Contact form submitted data:', data);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      reset();

      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto space-y-12">
        <SectionHeading
          badge="Contact Me"
          title="Get In Touch"
          subtitle="Have a question or want to work together? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-8">
          <Card
            delay={0.2}
            className="md:col-span-2 p-7 flex flex-col justify-between hover:border-blue-400/50"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-200/80 dark:border-blue-800 shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:huynhnhattu5676@gmail.com"
                      className="text-slate-900 dark:text-slate-100 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all"
                    >
                      huynhnhattu5676@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-200/80 dark:border-blue-800 shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+84908835676"
                      className="text-slate-900 dark:text-slate-100 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      +84 908 835 676
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-200/80 dark:border-blue-800 shrink-0">
                    <LocationOnIcon />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                      Location
                    </p>
                    <p className="text-slate-900 dark:text-slate-100 font-bold text-sm">
                      Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.319350036697!2d106.695314!3d10.786834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f356eb5f159%3A0x6a19f2a24911d889!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1622013019124!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Card>

          <Card
            delay={0.4}
            className="md:col-span-3 p-8 hover:border-blue-400/50"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xs transition-all text-sm font-medium"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <ErrorOutlineIcon fontSize="inherit" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xs transition-all text-sm font-medium"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <ErrorOutlineIcon fontSize="inherit" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xs transition-all resize-none text-sm font-medium"
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                    <ErrorOutlineIcon fontSize="inherit" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full py-3.5 text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <SendIcon fontSize="small" className="ml-1" />
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-xl text-center text-sm font-bold shadow-xs animate-pulse">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
