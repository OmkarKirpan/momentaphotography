import { Check } from "lucide-react";

const services = [
  {
    name: "Essential Package",
    price: "$1,999",
    features: [
      "6 hours of coverage",
      "One photographer",
      "Online gallery",
      "100 edited digital images",
    ],
  },
  {
    name: "Premium Package",
    price: "$2,999",
    features: [
      "8 hours of coverage",
      "Two photographers",
      "Online gallery",
      "200 edited digital images",
      "Engagement photo session",
    ],
  },
  {
    name: "Luxury Package",
    price: "$3,999",
    features: [
      "Full day coverage",
      "Two photographers",
      "Online gallery",
      "All edited digital images",
      "Engagement photo session",
      "Wedding album",
      "Canvas print",
    ],
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.name} className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="text-3xl font-bold mb-6">{service.price}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Add-ons</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Additional hour of coverage: $250/hour</li>
          <li>Second photographer: $500</li>
          <li>Engagement photo session: $400</li>
          <li>Wedding album (30 pages): $800</li>
          <li>Canvas print (24&quot; x 36&quot;): $300</li>
        </ul>
      </div>
    </div>
  );
}
