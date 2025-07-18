"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, ShieldCheck, ArrowLeft, Heart, Share2 } from "lucide-react"
import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Find the product and related products
    const foundProduct = products.find((p) => p.id === id)

    if (foundProduct) {
      setProduct(foundProduct)
      // Get related products (excluding current product)
      const related = products.filter((p) => p.id !== id).slice(0, 4)
      setRelatedProducts(related)
    }

    setIsLoading(false)
  }, [id])

  if (isLoading) {
    return (
      <div className="container px-4 py-8 md:py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading product...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container px-4 py-8 md:py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product Not Found</h2>
          <p className="mt-2 text-gray-500">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="mt-6 rounded-full bg-eco-gradient">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

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
          <div className="overflow-hidden rounded-2xl border bg-white">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border bg-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} view ${i}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-100 px-3 py-1 text-sm text-eco-700 mb-2">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/cart">
                <Button className="sm:flex-1 rounded-full bg-eco-gradient">Add to Cart</Button>
              </Link>
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
        </div>
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
          <TabsContent value="description" className="p-6 border rounded-2xl mt-4">
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
          <TabsContent value="specifications" className="p-6 border rounded-2xl mt-4">
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
          <TabsContent value="reviews" className="p-6 border rounded-2xl mt-4">
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
                  <div key={index} className="space-y-2 p-4 rounded-xl border hover:border-eco-200 transition-colors">
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
                  </div>
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
          {relatedProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

