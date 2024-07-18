'use client'
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ReceiptIndianRupee,
  Search,
  ShoppingCart,
  UserRound,
  Users,
} from "lucide-react"
import ArtworksList  from '@/components/ui/Inventory_list';
const initialArtworks = [
  {
    id: 1,
    name: 'Bandages',
    quantity: 200,
    category: 'Medical Supplies',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Surgical Masks',
    quantity: 500,
    category: 'Personal Protective Equipment (PPE)',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Gauze Pads',
    quantity: 300,
    category: 'Medical Supplies',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'IV Fluids (Normal Saline)',
    quantity: 100,
    category: 'Medical Supplies',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Disposable Gloves',
    quantity: 1000,
    category: 'Personal Protective Equipment (PPE)',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Antiseptic Solution (Betadine)',
    quantity: 50,
    category: 'Medical Supplies',
    image: '/placeholder.svg'
  },
  {
    id: 7,
    name: 'Defibrillator',
    quantity: 5,
    category: 'Medical Equipment',
    image: '/placeholder.svg'
  },
  {
    id: 8,
    name: 'Oxygen Tanks',
    quantity: 20,
    category: 'Medical Equipment',
    image: '/placeholder.svg'
  },
  {
    id: 9,
    name: 'Wheelchairs',
    quantity: 10,
    category: 'Medical Equipment',
    image: '/placeholder.svg'
  }
];
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Charts } from "@/components/analytics";
import { useState } from "react";
import { Orders } from "@/components/orders";

export default function Dashboard() {
  const [tab,settab]=useState('Inventory');
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
              onClick={()=>{settab('Dashboard')}}

                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                    href="#"
              onClick={()=>{settab('Patient')}}

                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <UserRound className="h-4 w-4"/>
                    Patient 
                </Link>
                <Link
                    href="#"
              onClick={()=>{settab('Billing')}}

                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <ReceiptIndianRupee className="h-4 w-4"/>
                    Billing
                </Link>
                <div className="border-t border-gray-300 my-1"></div>

                <Link
                href="#"
              onClick={()=>{settab('Employees')}}

                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                    Employees
              </Link>
              <Link
                href="#"
              onClick={()=>{settab('Analytics')}}

                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>

              <div className="border-t border-gray-300 my-1"></div>

              <Link
                href="#"
              onClick={()=>{settab('Inventory')}}

                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Inventory{" "}
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
              onClick={()=>{settab('Orders')}}

                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                
              </Link>
             
              
            </nav>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
              onClick={()=>{settab('Dashboard')}}

                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                  <UserRound className="h-4 w-4"/>
                  Patient 
              </Link>
              <Link
                  href="#"
              onClick={()=>{settab('Billing')}}

                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                  <ReceiptIndianRupee className="h-4 w-4"/>
                  Billing
              </Link>
              <div className="border-t border-gray-300 my-1"></div>

              <Link
              href="#"
              onClick={()=>{settab('Dashboard')}}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
                  Employees
            </Link>
            <Link
              href="#"
              onClick={()=>{settab('Employees')}}

              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>

            <div className="border-t border-gray-300 my-1"></div>

            <Link
              href="#"
              onClick={()=>{settab('Inventory')}}

              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Inventory{" "}
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="#"
              onClick={()=>{settab('Orders')}}

              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
              
            </Link>
            </nav>
            {/* <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our
                    support team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div> */}
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Inventory..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/settings">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href="/">
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
       
        {
          tab==='Inventory'&&
         <div>
           <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          {
              initialArtworks.length > 0 ? (
                <ArtworksList artworksData={initialArtworks} />
              ) : <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                No Inventory yet
              </h3>
              <p className="text-sm text-muted-foreground">
                Add Inventory
              </p>
              <Button className="mt-4">Add Inventory</Button>
            </div>
            }
        </div>
         </div>
        }
        {
          tab==='Analytics'&&
          <Charts/>
        }
        {
          tab==='Orders'&&
          <Orders/>
        }
      </main>
    </div>

      
    </div>
  )
}
