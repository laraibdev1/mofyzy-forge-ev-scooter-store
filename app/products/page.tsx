import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Filter, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Electric Scooters</h1>
        <p className="text-gray-500">
          Browse our collection of premium electric scooters for all your urban mobility needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Filters - Desktop */}
        <div className="hidden md:flex flex-col w-64 space-y-6">
          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="urban" />
                <Label htmlFor="urban">Urban Commuter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="offroad" />
                <Label htmlFor="offroad">Off-Road</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="lightweight" />
                <Label htmlFor="lightweight">Lightweight</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="performance" />
                <Label htmlFor="performance">Performance</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider defaultValue={[500]} max={1000} step={50} />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">$0</span>
              <span className="text-sm text-gray-500">$1000+</span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-3">Range</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="range1" />
                <Label htmlFor="range1">Up to 15 miles</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="range2" />
                <Label htmlFor="range2">15-25 miles</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="range3" />
                <Label htmlFor="range3">25+ miles</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-3">Speed</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="speed1" />
                <Label htmlFor="speed1">Up to 15 mph</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="speed2" />
                <Label htmlFor="speed2">15-20 mph</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="speed3" />
                <Label htmlFor="speed3">20+ mph</Label>
              </div>
            </div>
          </div>

          <Button className="mt-4">Apply Filters</Button>
        </div>

        {/* Mobile Filters */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your product search</SheetDescription>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="urban-mobile" />
                      <Label htmlFor="urban-mobile">Urban Commuter</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="offroad-mobile" />
                      <Label htmlFor="offroad-mobile">Off-Road</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lightweight-mobile" />
                      <Label htmlFor="lightweight-mobile">Lightweight</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="performance-mobile" />
                      <Label htmlFor="performance-mobile">Performance</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider defaultValue={[500]} max={1000} step={50} />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">$0</span>
                    <span className="text-sm text-gray-500">$1000+</span>
                  </div>
                </div>

                <Button className="w-full mt-4">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-end mb-6">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

