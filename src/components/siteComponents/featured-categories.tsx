import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

{/** This is for frontend, backend ko lagi paxi fetch garxu */}
const categories = [
    {
        name: 'Electronics',
        description: 'Latest tech gadgets',
        img: '',
        href: '/products=?category=electronics'
    },
    {
        name: 'Jacket',
        description: 'Latest Winter Clothes',
        img: '',
        href: '/products=?category=winter'
    },
    {
        name: 'Wireless headphones',
        description: 'Latest headphones',
        img: '',
        href: '/products=?category=headphones'
    },{
        name: 'Electronics',
        description: 'Latest tech gadgets',
        img: '',
        href: '/products=?category=electronics'
    }
]

export default function FeaturedCategories()
{
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4"> Shop By Category </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto"> Explore our thoughtfully organized collections </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((items) => (
                        <div key={items.name}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover: scale-105 transition-transform duration-500"
                                    style={{
                                        backgroundImage: `url${items.img}`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-medium text-gray-900 mb-2"> {items.name} </h3>
                                <p className="text-gray-600 mb-6"> {items.description} </p>
                                <Link href={items.href}>
                                    <Button variant="ghost" className="group/btn p-0 h-auto font-medium"> Explore Collections 
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"/>
                                    </Button>
                                    
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}