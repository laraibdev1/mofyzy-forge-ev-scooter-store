"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Truck,
  ShieldCheck,
  ArrowLeft,
  Minus,
  Plus,
  Heart,
  Share2,
  Battery,
  Zap,
  Award,
  ShoppingCart,
} from "lucide-react"
import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  // Product images (in a real app, these would come from the product data)
  const productImages = [
    product.image,
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link href="/products" className="flex items-center text-sm text-gray-500 hover:text-eco-600 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            className="overflow-hidden rounded-2xl border bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square"
              >
                <Image
                  src={productImages[activeImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, i) => (
              <motion.div
                key={i}
                className={`overflow-hidden rounded-lg border cursor-pointer ${activeImage === i ? "ring-2 ring-eco-500" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setActiveImage(i)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${i + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-2">
              <Zap className="mr-1 h-3.5 w-3.5" />
              <span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)} Scooter</span>
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
              </div>
              <span className="text-sm text-gray-500">(24 reviews)</span>
            </div>
          </div>

          <div>
            <span className="text-3xl font-bold text-eco-600">{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="ml-2 text-lg text-gray-500 line-through">{product.originalPrice}</span>
                <span className="ml-2 text-sm font-medium bg-eco-100 text-eco-700 px-2 py-1 rounded-full">
                  Save{" "}
                  {Math.round(
                    (1 -
                      Number.parseInt(product.price.replace(/\D/g, "")) /
                        Number.parseInt(product.originalPrice.replace(/\D/g, ""))) *
                      100,
                  )}
                  %
                </span>
              </>
            )}
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-gray-700">{product.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-eco-50 border border-eco-100">
                <Battery className="h-5 w-5 text-eco-600" />
                <div>
                  <div className="text-sm font-medium">25+ Mile Range</div>
                  <div className="text-xs text-gray-500">Long-lasting battery</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-eco-50 border border-eco-100">
                <Zap className="h-5 w-5 text-eco-600" />
                <div>
                  <div className="text-sm font-medium">20 MPH Speed</div>
                  <div className="text-xs text-gray-500">Powerful motor</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-eco-50 border border-eco-100">
                <Award className="h-5 w-5 text-eco-600" />
                <div>
                  <div className="text-sm font-medium">Premium Quality</div>
                  <div className="text-xs text-gray-500">Durable materials</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-eco-50 border border-eco-100">
                <ShieldCheck className="h-5 w-5 text-eco-600" />
                <div>
                  <div className="text-sm font-medium">2-Year Warranty</div>
                  <div className="text-xs text-gray-500">Peace of mind</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-eco-600" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-eco-600" />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-eco-200 text-eco-700 hover:bg-eco-50"
                onClick={decrementQuantity}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-eco-200 text-eco-700 hover:bg-eco-50"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="sm:flex-1 rounded-full bg-eco-gradient">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-eco-200 text-eco-700 hover:bg-eco-50"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-eco-200 text-eco-700 hover:bg-eco-50"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3 rounded-full bg-eco-50 p-1">
            <TabsTrigger
              value="description"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-eco-700"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-eco-700"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-eco-700"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-6 border rounded-2xl mt-4 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product Description</h3>
              <p>
                {product.description} Our electric scooters are designed with the urban commuter in mind, offering a
                perfect blend of style, performance, and sustainability. This model features a powerful motor,
                long-lasting battery, and comfortable riding experience.
              </p>
              <p>
                Whether you're commuting to work, running errands, or just exploring the city, this electric scooter
                will get you there in style and comfort. The lightweight frame makes it easy to carry when needed, and
                the foldable design ensures convenient storage at home or in the office.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="p-6 border rounded-2xl mt-4 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between p-2 rounded-lg bg-eco-50">
                    <span className="text-gray-600">Max Speed</span>
                    <span className="font-medium text-eco-700">20 mph</span>
                  </div>
                  <div className="flex justify-between p-2">
                    <span className="text-gray-600">Range</span>
                    <span className="font-medium">25 miles</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-eco-50">
                    <span className="text-gray-600">Battery</span>
                    <span className="font-medium text-eco-700">36V 10.4Ah</span>
                  </div>
                  <div className="flex justify-between p-2">
                    <span className="text-gray-600">Motor Power</span>
                    <span className="font-medium">350W</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 rounded-lg bg-eco-50">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium text-eco-700">27 lbs</span>
                  </div>
                  <div className="flex justify-between p-2">
                    <span className="text-gray-600">Max Load</span>
                    <span className="font-medium">265 lbs</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-eco-50">
                    <span className="text-gray-600">Charging Time</span>
                    <span className="font-medium text-eco-700">4-5 hours</span>
                  </div>
                  <div className="flex justify-between p-2">
                    <span className="text-gray-600">Tire Size</span>
                    <span className="font-medium">8.5 inches</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-2xl mt-4 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Customer Reviews</h3>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-eco-50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-eco-600">4.8</div>
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                  </div>
                  <div className="text-sm text-gray-500">24 reviews</div>
                </div>
                <Separator orientation="vertical" className="h-16" />
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <span className="w-6 text-sm text-gray-500">{rating}</span>
                      <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-yellow-400 h-full rounded-full"
                          style={{
                            width:
                              rating === 5
                                ? "70%"
                                : rating === 4
                                  ? "20%"
                                  : rating === 3
                                    ? "5%"
                                    : rating === 2
                                      ? "3%"
                                      : "2%",
                          }}
                        />
                      </div>
                      <span className="w-8 text-sm text-gray-500">
                        {rating === 5 ? "70%" : rating === 4 ? "20%" : rating === 3 ? "5%" : rating === 2 ? "3%" : "2%"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Sample Reviews */}
              <div className="space-y-6">
                {[
                  {
                    name: "Sarah Johnson",
                    avatar: "/placeholder.svg?height=50&width=50",
                    date: "May 15, 2023",
                    rating: 5,
                    comment:
                      "This scooter has transformed my daily commute. It's fast, reliable, and so much fun to ride!",
                  },
                  {
                    name: "Michael Chen",
                    avatar: "/placeholder.svg?height=50&width=50",
                    date: "April 3, 2023",
                    rating: 4,
                    comment:
                      "Great scooter overall. Battery life is excellent, though I wish it was a bit lighter to carry up stairs.",
                  },
                  {
                    name: "Priya Patel",
                    avatar: "/placeholder.svg?height=50&width=50",
                    date: "March 22, 2023",
                    rating: 5,
                    comment:
                      "I love how portable this scooter is. I can easily take it on public transport when needed.",
                  },
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2 p-4 rounded-xl border hover:border-eco-200 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="rounded-full border-eco-200 text-eco-700 hover:bg-eco-50 w-full">
                Write a Review
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-2">
            <Star className="mr-1 h-3.5 w-3.5" />
            <span>More to Explore</span>
          </div>
          <h2 className="text-2xl font-bold">You May Also Like</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

