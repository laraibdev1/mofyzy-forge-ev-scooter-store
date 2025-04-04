"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="product-card-hover"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden border-0 rounded-2xl shadow-sm">
        <Link href={`/products/${product.id}`}>
          <div
            className="aspect-square relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            {product.originalPrice && (
              <div className="absolute top-2 right-2 bg-eco-gradient text-white text-xs font-bold px-3 py-1 rounded-full">
                SALE
              </div>
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.6 : 0,
              }}
            />
          </div>
        </Link>
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold hover:text-eco-600 transition-colors">{product.name}</h3>
            </Link>
            <div className="font-semibold text-eco-600">{product.price}</div>
          </div>
          {product.originalPrice && (
            <div className="mt-1 text-sm text-gray-500 line-through">{product.originalPrice}</div>
          )}
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              <span className="text-xs text-gray-500 ml-1">(24)</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1 rounded-full bg-eco-gradient">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-eco-200 text-eco-600 hover:bg-eco-50">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

