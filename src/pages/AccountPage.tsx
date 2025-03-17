import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Package, Heart, CreditCard, Settings, LogOut, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AccountPage = () => {
  // In a real app, this would load from an authenticated user's data
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData({ ...formData });
    setIsEditing(false);
  };

  // Demo orders - in a real app these would come from an API
  const orders = [
    {
      id: "ORD-12345",
      date: "2025-03-15",
      status: "Delivered",
      total: 1299.99,
      items: 2
    },
    {
      id: "ORD-12346",
      date: "2025-03-10",
      status: "Processing",
      total: 349.99,
      items: 1
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold">My Account</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6 flex w-full justify-start overflow-auto">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User size={16} />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package size={16} />
                Orders
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart size={16} />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard size={16} />
                Payment Methods
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings size={16} />
                Settings
              </TabsTrigger>
            </TabsList>
            
            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="rounded-lg border">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Personal Information</h2>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button type="submit">Save Changes</Button>
                      </div>
                    </form>
                  ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          First Name
                        </p>
                        <p className="mt-1">{userData.firstName}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Last Name
                        </p>
                        <p className="mt-1">{userData.lastName}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Email
                        </p>
                        <p className="mt-1">{userData.email}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Phone
                        </p>
                        <p className="mt-1">{userData.phone}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Address Section */}
              <div className="mt-6 rounded-lg border">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Addresses</h2>
                    <Button variant="outline">Add New</Button>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Default Address */}
                    <div className="rounded-md border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-medium">Home</span>
                          <span className="ml-2 rounded-full bg-brand-blue/10 px-2 py-0.5 text-xs text-brand-blue">
                            Default
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        John Doe<br />
                        123 Main Street<br />
                        Apt 4B<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                    
                    {/* Additional Address */}
                    <div className="rounded-md border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-medium">Office</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        John Doe<br />
                        456 Business Ave<br />
                        Suite 300<br />
                        New York, NY 10002<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders">
              <div className="rounded-lg border">
                <div className="p-6">
                  <h2 className="mb-6 text-xl font-semibold">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <ShoppingBag size={48} className="mb-4 text-muted-foreground" />
                      <h3 className="mb-2 text-lg font-semibold">No orders yet</h3>
                      <p className="mb-6 text-muted-foreground">
                        You haven't placed any orders yet.
                      </p>
                      <Button asChild>
                        <Link to="/">Start Shopping</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full table-auto border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 text-left font-semibold">Order #</th>
                            <th className="py-3 text-left font-semibold">Date</th>
                            <th className="py-3 text-left font-semibold">Status</th>
                            <th className="py-3 text-left font-semibold">Items</th>
                            <th className="py-3 text-left font-semibold">Total</th>
                            <th className="py-3 text-left font-semibold">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.id} className="border-b">
                              <td className="py-4 font-medium">{order.id}</td>
                              <td className="py-4">{order.date}</td>
                              <td className="py-4">
                                <span
                                  className={`rounded-full px-2 py-1 text-xs ${
                                    order.status === "Delivered"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-4">{order.items}</td>
                              <td className="py-4">${order.total.toFixed(2)}</td>
                              <td className="py-4">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            {/* Other tabs would follow the same pattern */}
            <TabsContent value="wishlist">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-xl font-semibold">Wishlist Items</h2>
                <p className="text-center">
                  Go to your <Link to="/wishlist" className="text-brand-blue hover:underline">wishlist page</Link> to view your saved items.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="payment">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-xl font-semibold">Payment Methods</h2>
                <p className="text-center">
                  You can add and manage your payment methods during checkout.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 text-xl font-semibold">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium">Change Password</h3>
                    <Button variant="outline">Update Password</Button>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="mb-2 font-medium">Email Preferences</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Control which emails you receive from us.
                    </p>
                    <Button variant="outline">Manage Preferences</Button>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="mb-2 font-medium text-destructive">Danger Zone</h3>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Permanently delete your account and all your data.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
