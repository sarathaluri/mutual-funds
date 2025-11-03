import { Badge } from "@/components/ui/badge";

export default function AMCPartners() {
  const amcs = [
    "SBI Mutual Fund",
    "HDFC Mutual Fund",
    "ICICI Prudential",
    "Axis Mutual Fund",
    "Kotak Mahindra",
    "Aditya Birla SL",
    "UTI Mutual Fund",
    "Nippon India",
    "Franklin Templeton",
    "DSP Mutual Fund",
    "Mirae Asset",
    "Tata Mutual Fund",
    "IDFC Mutual Fund",
    "L&T Mutual Fund",
    "Edelweiss MF",
    "PGIM India",
    "Quantum MF",
    "Sundaram MF",
    "Mahindra Manulife",
    "Invesco MF",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Authorized AMC Partner Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AMFI registered distributor with access to investment products from all SEBI-regulated Asset Management Companies in India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {amcs.map((amc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 bg-card rounded-lg border hover-elevate"
              data-testid={`amc-${idx}`}
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground">{amc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">And many more...</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" data-testid="badge-equity">Equity Funds</Badge>
            <Badge variant="outline" data-testid="badge-debt">Debt Funds</Badge>
            <Badge variant="outline" data-testid="badge-hybrid">Hybrid Funds</Badge>
            <Badge variant="outline" data-testid="badge-elss">ELSS Funds</Badge>
            <Badge variant="outline" data-testid="badge-index">Index Funds</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}