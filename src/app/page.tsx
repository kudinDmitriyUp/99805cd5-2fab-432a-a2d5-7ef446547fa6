"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Heart, Mail, Play, Star, User, Users, Instagram, Facebook, Twitter } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc=""
          logoAlt=""
          brandName="Vera & Bennet"
          button={{
            text: "Watch Now",
            href: "#contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="A Journey Through Grief"
          description="Follow Vera and Bennet as they navigate the complex emotional landscape of loss, discovering that acceptance is not the end, but a new beginning."
          tag="Now Available"
          tagIcon={Play}
          buttons={[
            {
              text: "Watch Trailer",
              href: "https://youtube.com"
            },
            {
              text: "Learn More",
              href: "#about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162898912-glnqpgox.jpg"
          imageAlt="Movie poster featuring Vera and Bennet"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="The Story"
          description="An intimate exploration of grief's transformative power, this film captures the raw emotional journey of two souls learning to accept loss and find meaning in their pain."
          tag="About the Film"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Vera's Journey",
              description: "A woman confronting the stages of grief, from denial through anger to eventual acceptance",
              icon: User
            },
            {
              title: "Bennet's Path",
              description: "A companion in sorrow who discovers that healing comes through connection and understanding",
              icon: Users
            },
            {
              title: "Universal Themes",
              description: "Themes of loss, healing, and the resilience of the human spirit resonate with all audiences",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162899719-56kdm1yx.jpg"
          imageAlt="Vera in a contemplative moment"
          imagePosition="right"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Viewers Are Saying"
          description="This powerful film has touched hearts and opened conversations about grief and healing"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Film Critic",
              company: "Cinema Today",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162901095-u3wpoxvp.jpg",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Michael Roberts",
              role: "Movie Reviewer",
              company: "Independent Film",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162901604-rc30myjh.jpg",
              imageAlt: "Michael Roberts portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Entertainment Editor",
              company: "Arts Weekly",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162902245-ms6s1tdp.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Film Festival Director",
              company: "Indie Cinema",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162902993-bssw0mjo.jpg",
              imageAlt: "David Martinez portrait"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Community"
          description="Subscribe to receive updates about screenings, discussions, and resources about grief and healing. Connect with others on similar journeys."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about the film and related content. You can unsubscribe at any time."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763162903557-9nyi98s7.jpg"
          imageAlt="Still from the movie showing Vera and Bennet"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Vera & Bennet"
          copyrightText="© 2025 | Vera & Bennet Film"
          columns={[
            {
              title: "Film",
              items: [
                {
                  label: "About",
                  href: "#about"
                },
                {
                  label: "Cast & Crew",
                  href: "#cast"
                },
                {
                  label: "Screenings",
                  href: "#screenings"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Grief Support",
                  href: "https://griefshare.org"
                },
                {
                  label: "Discussion Guide",
                  href: "#guide"
                },
                {
                  label: "Community",
                  href: "#community"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Contact Us",
                  href: "#contact"
                },
                {
                  label: "Press Kit",
                  href: "#press"
                },
                {
                  label: "Newsletter",
                  href: "#contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/veraandbennetfilm",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/veraandbennetfilm",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/veraandbennet",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}