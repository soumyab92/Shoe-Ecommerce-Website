import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";

export function AccountPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 2023",
    totalOrders: 12,
    totalSpent: 2847
  };

  const recentOrders = [
    {
      id: "SO-12345",
      date: "Jan 15, 2025",
      status: "Delivered",
      total: 299,
      items: ["Classic Oxford Dress Shoes"]
    },
    {
      id: "SO-12344",
      date: "Dec 28, 2024",
      status: "Shipped",
      total: 378,
      items: ["Elegant High Heel Pumps", "Canvas Casual Sneakers"]
    },
    {
      id: "SO-12343",
      date: "Dec 15, 2024",
      status: "Delivered",
      total: 229,
      items: ["Women's Ankle Boots"]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Premium Leather Loafers",
      price: 249,
      image: "https://images.unsplash.com/photo-1571892808095-63e6b3e8a46a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbG9hZmVyc3xlbnwxfHx8fDE3NTM4OTI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Athletic Running Shoes",
      price: 149,
      image: "https://images.unsplash.com/photo-1621519765361-59e3295d0f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NTM4OTI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered": return "bg-green-500";
      case "shipped": return "bg-blue-500";
      case "processing": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mb-2">My Account</h1>
        <p className="text-muted-foreground">Welcome back, {user.name}!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Orders</span>
                  <span>{user.totalOrders}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Spent</span>
                  <span>${user.totalSpent}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="">Order {order.id}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{order.date}</p>
                        <p className="text-sm">
                          {order.items.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg mb-2">${order.total}</p>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          {order.status === "Delivered" && (
                            <Button variant="outline" size="sm">Reorder</Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center">
                <Button variant="outline">View All Orders</Button>
              </div>
            </TabsContent>

            {/* Wishlist Tab */}
            <TabsContent value="wishlist" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wishlistItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="mb-2">{item.name}</h3>
                          <p className="text-lg mb-3">${item.price}</p>
                          <div className="space-y-2">
                            <Button size="sm" className="w-full">Add to Cart</Button>
                            <Button variant="outline" size="sm" className="w-full">Remove</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {wishlistItems.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground mb-4">
                    Save items you love to your wishlist
                  </p>
                  <Button>Continue Shopping</Button>
                </div>
              )}
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground">First Name</label>
                      <p className="mt-1">John</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Last Name</label>
                      <p className="mt-1">Doe</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Email</label>
                      <p className="mt-1">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Phone</label>
                      <p className="mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>123 Main Street</p>
                    <p>Apartment 4B</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                  </div>
                  <Button className="mt-4">Edit Address</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}