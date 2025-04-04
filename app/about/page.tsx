import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">About Aman Scooters</h1>
        <p className="text-gray-500 max-w-3xl">
          Learn about our mission, our story, and the team behind the premium electric scooters.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/aman.png"
                alt="Aman Enterprises Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500">
                Aman Scooters was founded in 2018 by Aman Sharma, an engineer with a passion for sustainable urban
                mobility. After experiencing the challenges of city commuting firsthand, Aman set out to create electric
                scooters that would revolutionize urban transportation.
              </p>
              <p className="text-gray-500">
                What started as a small workshop in a garage has now grown into a leading electric scooter company with
                a mission to make eco-friendly transportation accessible to everyone without compromising on style or
                performance.
              </p>
              <p className="text-gray-500">
                Today, Aman Scooters continues to innovate and push the boundaries of what's possible in electric
                mobility, with a focus on quality, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 bg-gray-100 rounded-xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Aman Scooters, our mission is to revolutionize urban transportation with eco-friendly electric
                scooters that don't compromise on style or performance. We believe in a greener future where electric
                mobility is accessible to everyone.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-gray-500">
                  We're committed to reducing carbon emissions and creating a more sustainable future through electric
                  mobility.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500">
                  We continuously innovate to improve our products, incorporating the latest technology and design
                  principles.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-gray-500">
                  We're building a community of riders who share our vision for a cleaner, more efficient urban mobility
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
            <p className="max-w-[900px] text-gray-500">
              The passionate individuals behind Aman Scooters who are dedicated to revolutionizing urban mobility.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Aman Maniyar",
              role: "Founder & CEO",
              image: "/aman.png",
              bio: "Passionate about sustainable urban mobility and electric vehicles.",
            },
            {
              name: "Priya Patel",
              role: "Chief Design Officer",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Award-winning industrial designer with a focus on user-centered design.",
            },
            {
              name: "Michael Chen",
              role: "CTO",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Expert in electric vehicle technology and battery optimization.",
            },
            {
              name: "Sarah Johnson",
              role: "Head of Customer Experience",
              image: "/placeholder.svg?height=300&width=300",
              bio: "Dedicated to ensuring every customer has an exceptional experience.",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-12 bg-gray-100 rounded-xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[900px] text-gray-500">
                The core principles that guide everything we do at Aman Scooters.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-gray-500">
                We never compromise on quality. Every scooter undergoes rigorous testing to ensure it meets our high
                standards.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-500">
                We're committed to reducing our environmental impact through sustainable manufacturing practices and
                eco-friendly products.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500">
                We continuously push the boundaries of what's possible in electric mobility through research and
                development.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Customer-Centric</h3>
              <p className="text-gray-500">
                Our customers are at the heart of everything we do. We listen to feedback and continuously improve our
                products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Join the Electric Revolution</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
              Ready to experience the future of urban mobility? Browse our collection of premium electric scooters
              today.
            </p>
          </div>
          <Link href="/products">
            <Button size="lg" className="px-8">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

