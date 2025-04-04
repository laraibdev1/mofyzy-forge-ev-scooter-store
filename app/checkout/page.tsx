"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, Truck, ShieldCheck } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample cart items (same as cart page)
const cartItems = [
  {
    id: "urban-glide-pro",
    name: "Urban Glide Pro",
    price: 599,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "explorer-max",
    name: "Explorer Max",
    price: 799,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link href="/cart" className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to cart
        </Link>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Checkout Steps */}
          <div className="flex mb-8">
            <div className={`flex-1 text-center pb-4 ${step >= 1 ? "border-b-2 border-primary" : "border-b"}`}>
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-gray-200"} mb-2`}
              >
                1
              </div>
              <div className="text-sm font-medium">Shipping</div>
            </div>
            <div className={`flex-1 text-center pb-4 ${step >= 2 ? "border-b-2 border-primary" : "border-b"}`}>
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-gray-200"} mb-2`}
              >
                2
              </div>
              <div className="text-sm font-medium">Payment</div>
            </div>
            <div className={`flex-1 text-center pb-4 ${step >= 3 ? "border-b-2 border-primary" : "border-b"}`}>
              <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-gray-200"} mb-2`}
              >
                3
              </div>
              <div className="text-sm font-medium">Confirmation</div>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="rounded-lg border shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street address</Label>
                    <Input id="address" placeholder="Enter your street address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                    <Input id="address2" placeholder="Apartment, suite, etc." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Enter your city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province</Label>
                      <Select>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                          <SelectItem value="il">Illinois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP / Postal code</Label>
                      <Input id="zip" placeholder="Enter your ZIP code" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex items-center">
                        <Truck className="mr-2 h-4 w-4" />
                        Standard Shipping (3-5 business days)
                      </Label>
                    </div>
                    <div className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</div>
                  </div>
                  <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex items-center">
                        <Truck className="mr-2 h-4 w-4" />
                        Express Shipping (1-2 business days)
                      </Label>
                    </div>
                    <div className="font-medium">$25.00</div>
                  </div>
                </RadioGroup>
              </div>

              <Button className="w-full" onClick={() => setStep(2)}>
                Continue to Payment
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="rounded-lg border shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                <RadioGroup defaultValue="credit-card">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg mt-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="rounded-lg border shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Card Details</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Name on card</Label>
                    <Input id="card-name" placeholder="Enter name as it appears on card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card number</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="CVC" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Billing Address</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox id="same-address" defaultChecked />
                  <Label htmlFor="same-address">Same as shipping address</Label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button className="flex-1" onClick={() => setStep(3)}>
                  Complete Order
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="rounded-full bg-green-100 p-6 mx-auto w-fit">
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
                  className="h-10 w-10 text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Order Confirmed!</h2>
              <p className="text-gray-500">
                Thank you for your purchase. Your order has been confirmed and will be shipped soon.
              </p>
              <div className="rounded-lg border p-6 text-left mt-8">
                <h3 className="font-medium mb-2">Order #12345</h3>
                <p className="text-sm text-gray-500 mb-4">A confirmation email has been sent to your email address.</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Truck className="h-4 w-4 text-gray-500" />
                    <span>Estimated delivery: May 15 - May 18</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <ShieldCheck className="h-4 w-4 text-gray-500" />
                    <span>2-year warranty included</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Return to Home
                  </Button>
                </Link>
                <Link href="/account/orders" className="flex-1">
                  <Button className="w-full">View Order</Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="rounded-lg border shadow-sm h-fit">
          <div className="p-6">
            <h3 className="font-medium text-lg mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm mt-1">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

