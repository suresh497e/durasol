import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ProductComparisonTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Product Comparison</h2>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Model</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>DC Voltage</TableHead>
                  <TableHead>Normal Charging Current</TableHead>
                  <TableHead>Fast Charging Current</TableHead>
                  <TableHead>Dimensions (mm)</TableHead>
                  <TableHead>Weight (Kg)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">DSW850</TableCell>
                  <TableCell>700VA/12V</TableCell>
                  <TableCell>12V</TableCell>
                  <TableCell>10 ± 2 Amp</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>270 x 275 x 115</TableCell>
                  <TableCell>6.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW950</TableCell>
                  <TableCell>760VA/12V</TableCell>
                  <TableCell>12V</TableCell>
                  <TableCell>10 ± 2 Amp</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>270 x 275 x 115</TableCell>
                  <TableCell>6.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW1050</TableCell>
                  <TableCell>860VA/12V</TableCell>
                  <TableCell>12V</TableCell>
                  <TableCell>10 ± 2 Amp</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>285 x 295 x 135</TableCell>
                  <TableCell>7.4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW1150</TableCell>
                  <TableCell>950VA/12V</TableCell>
                  <TableCell>12V</TableCell>
                  <TableCell>10 ± 2 Amp</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>285 x 295 x 135</TableCell>
                  <TableCell>7.6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW1250</TableCell>
                  <TableCell>1050VA/12V</TableCell>
                  <TableCell>12V</TableCell>
                  <TableCell>10 ± 2 Amp</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>285 x 295 x 135</TableCell>
                  <TableCell>7.9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW1450</TableCell>
                  <TableCell>1200VA/12V</TableCell>
                  <TableCell>12V</TableCell>
                  <TableCell>10 ± 2 Amp</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>315 x 295 x 180</TableCell>
                  <TableCell>8.9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW1700</TableCell>
                  <TableCell>1500VA/24V</TableCell>
                  <TableCell>24V</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>20 ± 2 Amp</TableCell>
                  <TableCell>315 x 295 x 180</TableCell>
                  <TableCell>10.6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW2100</TableCell>
                  <TableCell>1900VA/24V</TableCell>
                  <TableCell>24V</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>20 ± 2 Amp</TableCell>
                  <TableCell>315 x 295 x 180</TableCell>
                  <TableCell>13.2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW2500</TableCell>
                  <TableCell>2250VA/24V</TableCell>
                  <TableCell>24V</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>20 ± 2 Amp</TableCell>
                  <TableCell>315 x 295 x 280</TableCell>
                  <TableCell>14.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DSW3000</TableCell>
                  <TableCell>2750VA/24V</TableCell>
                  <TableCell>24V</TableCell>
                  <TableCell>15 ± 2 Amp</TableCell>
                  <TableCell>20 ± 2 Amp</TableCell>
                  <TableCell>315 x 295 x 280</TableCell>
                  <TableCell>17.7</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>*All models feature Pure Sine Wave output, dual mode operation, and support for multiple battery types.</p>
          <p>*For detailed technical specifications, please refer to the product brochure.</p>
        </div>
      </div>
    </section>
  )
}
