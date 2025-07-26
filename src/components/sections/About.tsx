import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-purple-blue text-2xl">About Me</h2>
        <Card className="p-6 bg-card border-card-border">
          <p className="mb-4">$ cat about.txt</p>
          <div className="text-green">
            <ul className="flex flex-col gap-2">
            <li>💼 I am currently a Software Engineer at <span className="text-blue">JPMorganChase</span> in the GFICC Portfolio Management Team</li>
              <li>🐝 I hold a Bachelor&apos;s degree in Electrical Engineering from <span className="text-blue">IIT (BHU), Varanasi</span></li>
              <li>🍀 I have a keen interest in <span className="text-blue">Open Source</span>, <span className="text-blue">Web Development</span>, <span className="text-blue">Competitive Programming</span>, and <span className="text-blue">Natural Language Processing</span></li>
              <li>🚀 I’m currently learning <span className="text-blue">Distributed Systems</span>, <span className="text-blue">Databases</span>, and <span className="text-blue">Golang</span></li>            </ul>
          </div>
          <p className="mt-4 text-blue">Experience:</p>
          <ul className="list-disc list-inside mt-2 text-purple">
            <li>Former Software Engineer Intern @ JPMorganChase</li>
            <li>Google Summer of Code 2023 Contributor @ MetaBrainz Foundation</li>
            <li>Former Research Consultant @ WorldQuant</li>
          </ul>
        </Card>
      </div>
    </>
  )
}
