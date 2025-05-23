import Link from "next/link"
import {
  Github,
  Mail,
  ChevronRight,
  BarChart2,
  Database,
  Cpu,
  Repeat,
  Zap,
  FlaskRoundIcon as Flask,
  LineChart,
  Clock,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LBdanton ML</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#expertise" className="text-sm font-medium hover:text-primary">
              Expertise
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="https://github.com/adg88lu" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-primary">Train. Predict.</span>
                <span className="block">Optimize. Repeat.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Intelligent machine learning solutions, designed to integrate into your existing workflows seamlessly —
                from algorithm development to full-system deployment.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#services">
                    Explore Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">
                    Contact Us
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground">
                We provide plug-and-play machine learning solutions that seamlessly integrate with your existing
                workflows.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<BarChart2 className="h-10 w-10 text-primary" />}
                title="Algorithm Development"
                description="Custom ML algorithms tailored to your specific business needs and data characteristics."
              />
              <ServiceCard
                icon={<Database className="h-10 w-10 text-primary" />}
                title="Data Pipeline Automation"
                description="Automated data pipelines that transform raw data into actionable insights."
              />
              <ServiceCard
                icon={<LineChart className="h-10 w-10 text-primary" />}
                title="Interactive Dashboards"
                description="Tailored data visualization platforms that bring clarity to complex data streams."
              />
              <ServiceCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Predictive Simulations"
                description="Advanced predictive models for operational optimization and forecasting."
              />
              <ServiceCard
                icon={<Repeat className="h-10 w-10 text-primary" />}
                title="End-to-End Deployment"
                description="Seamless deployment from development to production with scalable infrastructure."
              />
              <ServiceCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Robust Model Development"
                description="ML models that are not just technically sound but operationally viable."
              />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
              <p className="mt-4 text-muted-foreground">
                Our experience spans across data-driven R&D, manufacturing, and operational optimization with predictive
                simulations.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <ExpertiseCard
                icon={<Flask className="h-8 w-8 text-primary" />}
                title="Chemical & Biotechnological Processes"
                description="Process characterization and simulation for chemical and biotechnological applications."
              />
              <ExpertiseCard
                icon={<Cpu className="h-8 w-8 text-primary" />}
                title="Protein Analysis"
                description="Stability and degradation prediction for protein-based products and research."
              />
              <ExpertiseCard
                icon={<Database className="h-8 w-8 text-primary" />}
                title="High-Throughput Data"
                description="Interpretation and classification of complex, high-volume data sets."
              />
              <ExpertiseCard
                icon={<Clock className="h-8 w-8 text-primary" />}
                title="Time Series Analysis"
                description="Sensor-based anomaly detection and time series forecasting."
              />
            </div>
            <div className="mt-16 rounded-lg bg-background p-8 shadow-sm">
              <h3 className="text-xl font-bold">Our Approach</h3>
              <p className="mt-4">
                Our expertise combines modern ML methods with real-world lab experience: we understand the realities of
                data, noisy signals, regulatory constraints, and the need for reproducibility.
              </p>
              <p className="mt-4">
                This allows us to deliver robust models that aren't just technically sound — they're operationally
                viable.
              </p>
              <p className="mt-4">
                From standalone prediction tools to fully integrated, cloud-native systems, we build modular, scalable
                infrastructure that grows with your business — we ensure seamless end-to-end deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                Ready to optimize your workflows with intelligent ML solutions? Get in touch with our team.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:LBdanton.contact@get-it-easy.info" className="text-lg font-medium hover:text-primary">
                    LBdanton.contact@get-it-easy.info
                  </a>
                </div>
                <Button asChild size="lg">
                  <a href="https://github.com/adg88lu" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Our Projects on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">© 2025 LBdanton ML. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/adg88lu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:LBdanton.contact@get-it-easy.info" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="flex gap-4 rounded-lg bg-background p-6 shadow-sm">
      <div className="mt-1 shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
