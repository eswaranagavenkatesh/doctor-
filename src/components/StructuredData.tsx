import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'homepage' | 'service' | 'doctor' | 'contact' | 'faq';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const schemas: any[] = [];

    // Organization Schema (for all pages)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Vishakaha Multispeciality Clinic",
      "alternateName": "Visakha Multi Speciality Clinics",
      "description": "Premier multispeciality healthcare facility in Visakhapatnam offering comprehensive medical services including doctor consultations, diagnostic lab, pharmacy, lifestyle wellness, and home healthcare with 10 years of trusted excellence.",
      "url": "https://vishakahaclinic.com",
      "logo": "https://vishakahaclinic.com/logo.png",
      "image": "https://vishakahaclinic.com/clinic-image.jpg",
      "telephone": "+918912345678",
      "email": "info@vishakahaclinic.com",
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Insurance",
      "currenciesAccepted": "INR",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "KGH Down, Opp KGH Clock Tower, Krishna Nagar, Jagadamba Junction",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530002",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Opp Tiles Mart, Krishna Nagar, Chandrampalem, Madhurawada",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530041",
          "addressCountry": "IN"
        }
      ],
      "geo": [
        {
          "@type": "GeoCoordinates",
          "latitude": "17.71072",
          "longitude": "83.29996"
        },
        {
          "@type": "GeoCoordinates",
          "latitude": "17.7833",
          "longitude": "83.3167"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "medicalSpecialty": [
        "General Medicine",
        "Cardiology",
        "Pediatrics",
        "Gynecology",
        "Orthopedics",
        "ENT",
        "Dermatology",
        "Diabetology",
        "Physiotherapy"
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "General Physician Consultation"
        },
        {
          "@type": "MedicalTest",
          "name": "Diagnostic Laboratory Services"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Physiotherapy Services"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Home Healthcare Services"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/vishakahaclinic",
        "https://www.instagram.com/vishakahaclinic",
        "https://www.linkedin.com/company/vishakahaclinic",
        "https://twitter.com/vishakahaclinic"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "350",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    schemas.push(organizationSchema);

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vishakaha Multispeciality Clinic - KGH Junction",
      "image": "https://vishakahaclinic.com/clinic-kgh.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "KGH Down, Opp KGH Clock Tower, Krishna Nagar, Jagadamba Junction",
        "addressLocality": "Visakhapatnam",
        "addressRegion": "AP",
        "postalCode": "530002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.71072",
        "longitude": "83.29996"
      },
      "url": "https://vishakahaclinic.com",
      "telephone": "+918912345678",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ]
    };

    schemas.push(localBusinessSchema);

    // Homepage specific FAQs
    if (type === 'homepage') {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Vishakaha Multispeciality Clinic offer in Visakhapatnam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vishakaha Multispeciality Clinic offers comprehensive healthcare services including doctor consultations across multiple specializations, diagnostic laboratory services, pharmacy, lifestyle and wellness programs, home healthcare, physiotherapy, and preventive health checkup packages. We provide expert care in cardiology, pediatrics, gynecology, orthopedics, ENT, dermatology, and diabetology."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Vishakaha Multispeciality Clinic located in Vizag?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have two convenient locations in Visakhapatnam: (1) KGH Down, Opposite KGH Clock Tower, Krishna Nagar, Jagadamba Junction, Visakhapatnam - 530002, and (2) Opposite Tiles Mart, Krishna Nagar, Chandrampalem, Madhurawada, Visakhapatnam - 530041. Both branches offer complete medical services with experienced specialists."
            }
          },
          {
            "@type": "Question",
            "name": "What are the clinic timings at Vishakaha Multispeciality Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our clinic is open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 2:00 PM. We offer flexible appointment scheduling and emergency services. You can book appointments online or call +91 891 234 5678."
            }
          },
          {
            "@type": "Question",
            "name": "Does Vishakaha Clinic provide home healthcare services in Visakhapatnam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive home healthcare services including home nursing, elderly care, post-surgery care, physiotherapy at home, and home sample collection for lab tests. Our trained healthcare professionals deliver quality medical care at your doorstep across Visakhapatnam."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book an appointment at Vishakaha Multispeciality Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book an appointment online through our website, call us at +91 891 234 5678, or visit our clinic directly. We offer easy online booking for all specializations including general physicians, cardiologists, pediatricians, gynecologists, and other specialists."
            }
          },
          {
            "@type": "Question",
            "name": "What diagnostic tests are available at Vishakaha Medical Lab?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our advanced diagnostic laboratory offers comprehensive testing including blood tests, diabetes screening, thyroid profile, lipid profile, liver and kidney function tests, complete blood count (CBC), ECG, X-ray, ultrasound, and full body health checkup packages. We provide accurate results with home sample collection facility."
            }
          },
          {
            "@type": "Question",
            "name": "Are health checkup packages available at Vishakaha Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer comprehensive health checkup packages including full body checkups, preventive care packages, senior citizen health plans, diabetes management packages, cardiac wellness packages, and women's health checkups. Our packages are designed for early detection and prevention of diseases."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a pharmacy at Vishakaha Multispeciality Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have a well-stocked medical pharmacy offering prescription medicines, over-the-counter products, health supplements, medical devices, and personal care items. We also provide doorstep medicine delivery services across Visakhapatnam for your convenience."
            }
          }
        ]
      };
      schemas.push(faqSchema);
    }

    // Service specific schema
    if (type === 'service' && data) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": `${data.title} - Vishakaha Multispeciality Clinic`,
        "description": data.description,
        "provider": {
          "@type": "MedicalClinic",
          "name": "Vishakaha Multispeciality Clinic"
        }
      };
      schemas.push(serviceSchema);
    }

    // Breadcrumb Schema
    if (data?.breadcrumb) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.breadcrumb.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      schemas.push(breadcrumbSchema);
    }

    // Insert all schemas
    schemas.forEach((schema, index) => {
      const scriptId = `structured-data-${type}-${index}`;
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      
      (script as HTMLScriptElement).textContent = JSON.stringify(schema);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${type}-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
