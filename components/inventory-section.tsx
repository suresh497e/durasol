import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function InventorySection() {
  const inventoryItems = [
    { id: 1, product: "Durasol Premium Paint", sku: "DP-001", stock: 125, status: "In Stock" },
    { id: 2, product: "Durasol Weather Shield", sku: "DW-002", stock: 78, status: "In Stock" },
    { id: 3, product: "Durasol Interior Emulsion", sku: "DI-003", stock: 42, status: "Low Stock" },
    { id: 4, product: "Durasol Exterior Emulsion", sku: "DE-004", stock: 0, status: "Out of Stock" },
    { id: 5, product: "Durasol Primer", sku: "DP-005", stock: 93, status: "In Stock" },
  ]

  const recentOrders = [
    { id: "ORD-2023-1234", date: "15 Apr 2023", items: 12, status: "Delivered", value: "₹45,600" },
    { id: "ORD-2023-1235", date: "22 Apr 2023", items: 8, status: "Processing", value: "₹32,400" },
    { id: "ORD-2023-1236", date: "28 Apr 2023", items: 15, status: "Pending", value: "₹58,200" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-[#005A9C] text-white">
          <CardTitle>Current Inventory</CardTitle>
          <CardDescription className="text-gray-100">Overview of your product stock levels</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead className="text-right">Stock</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell className="text-right">{item.stock}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "In Stock"
                          ? "bg-green-600"
                          : item.status === "Low Stock"
                            ? "bg-amber-500"
                            : "bg-[#E31E24]"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-[#005A9C] text-white">
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription className="text-gray-100">Your latest product orders</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        order.status === "Delivered"
                          ? "bg-green-600"
                          : order.status === "Processing"
                            ? "bg-amber-500"
                            : "bg-blue-500"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
