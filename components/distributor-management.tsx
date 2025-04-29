"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { Search, Edit, Save, Trash2, UserPlus } from "lucide-react"

// Sample distributor data
const initialDistributors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    type: "Premium",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 87654 32109",
    location: "Delhi, Delhi",
    type: "Standard",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+91 76543 21098",
    location: "Ahmedabad, Gujarat",
    type: "Premium",
    status: "Active",
  },
  {
    id: 4,
    name: "Sunita Verma",
    email: "sunita.verma@example.com",
    phone: "+91 65432 10987",
    location: "Bangalore, Karnataka",
    type: "Standard",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91 54321 09876",
    location: "Jaipur, Rajasthan",
    type: "Premium",
    status: "Active",
  },
]

export function DistributorManagement() {
  const [distributors, setDistributors] = useState(initialDistributors)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    type: "",
  })
  const [newDistributor, setNewDistributor] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    type: "Standard",
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredDistributors = distributors.filter(
    (distributor) =>
      distributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      distributor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      distributor.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (distributor: (typeof distributors)[0]) => {
    setEditingId(distributor.id)
    setEditForm({
      name: distributor.name,
      email: distributor.email,
      phone: distributor.phone,
      location: distributor.location,
      type: distributor.type,
    })
  }

  const handleSave = (id: number) => {
    setDistributors(
      distributors.map((distributor) =>
        distributor.id === id
          ? {
              ...distributor,
              name: editForm.name,
              email: editForm.email,
              phone: editForm.phone,
              location: editForm.location,
              type: editForm.type,
            }
          : distributor,
      ),
    )
    setEditingId(null)
    toast({
      title: "Distributor Updated",
      description: "The distributor information has been updated successfully.",
    })
  }

  const handleDelete = (id: number) => {
    setDistributors(distributors.filter((distributor) => distributor.id !== id))
    toast({
      title: "Distributor Removed",
      description: "The distributor has been removed successfully.",
      variant: "destructive",
    })
  }

  const handleAddDistributor = () => {
    if (!newDistributor.name || !newDistributor.email || !newDistributor.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    const newId = Math.max(...distributors.map((d) => d.id)) + 1
    setDistributors([
      ...distributors,
      {
        id: newId,
        ...newDistributor,
        status: "Active",
      },
    ])
    setNewDistributor({
      name: "",
      email: "",
      phone: "",
      location: "",
      type: "Standard",
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Distributor Added",
      description: "The new distributor has been added successfully.",
    })
  }

  return (
    <>
      <Card>
        <CardHeader className="bg-[#005A9C] text-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Distributor Management</CardTitle>
              <CardDescription className="text-gray-100">Manage your distributors</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-[#005A9C] hover:bg-gray-100">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Distributor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Distributor</DialogTitle>
                  <DialogDescription>Enter the details of the new distributor.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">Name *</label>
                    <Input
                      id="name"
                      value={newDistributor.name}
                      onChange={(e) => setNewDistributor({ ...newDistributor, name: e.target.value })}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      value={newDistributor.email}
                      onChange={(e) => setNewDistributor({ ...newDistributor, email: e.target.value })}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone">Phone *</label>
                    <Input
                      id="phone"
                      value={newDistributor.phone}
                      onChange={(e) => setNewDistributor({ ...newDistributor, phone: e.target.value })}
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="location">Location</label>
                    <Input
                      id="location"
                      value={newDistributor.location}
                      onChange={(e) => setNewDistributor({ ...newDistributor, location: e.target.value })}
                      placeholder="City, State"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="type">Type</label>
                    <select
                      id="type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={newDistributor.type}
                      onChange={(e) => setNewDistributor({ ...newDistributor, type: e.target.value })}
                    >
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddDistributor}>Add Distributor</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search distributors..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDistributors.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                      No distributors found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredDistributors.map((distributor) => (
                    <TableRow key={distributor.id}>
                      <TableCell>
                        {editingId === distributor.id ? (
                          <Input
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          />
                        ) : (
                          distributor.name
                        )}
                      </TableCell>
                      <TableCell>
                        {editingId === distributor.id ? (
                          <Input
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          />
                        ) : (
                          distributor.email
                        )}
                      </TableCell>
                      <TableCell>
                        {editingId === distributor.id ? (
                          <Input
                            value={editForm.phone}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                          />
                        ) : (
                          distributor.phone
                        )}
                      </TableCell>
                      <TableCell>
                        {editingId === distributor.id ? (
                          <Input
                            value={editForm.location}
                            onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                          />
                        ) : (
                          distributor.location
                        )}
                      </TableCell>
                      <TableCell>
                        {editingId === distributor.id ? (
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={editForm.type}
                            onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
                          >
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                          </select>
                        ) : (
                          <Badge
                            className={
                              distributor.type === "Premium"
                                ? "bg-[#E31E24] hover:bg-[#c01a1f]"
                                : "bg-[#005A9C] hover:bg-[#004a80]"
                            }
                          >
                            {distributor.type}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={distributor.status === "Active" ? "default" : "secondary"}
                          className={distributor.status === "Active" ? "bg-green-600" : "bg-gray-500"}
                        >
                          {distributor.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {editingId === distributor.id ? (
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleSave(distributor.id)}
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Save className="h-4 w-4" />
                            <span className="sr-only">Save</span>
                          </Button>
                        ) : (
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleEdit(distributor)}
                            className="text-[#005A9C] hover:text-[#004a80] hover:bg-blue-50"
                          >
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        )}
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleDelete(distributor.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
