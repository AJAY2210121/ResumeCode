
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Award, Code, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const TechResume = () => {
  const personalInfo = {
    name: "ANJALI KUMARI",
    title: "Backend Software Developer",
    description: "A focused Backend Software Developer with expertise in Java and Spring Boot, driving the creation of efficient and scalable applications in innovative tech environments through adept data processing and application development.",
    phone: "+91-XXXXXXXXXX",
    email: "anjali.kumari@email.com",
    location: "Chennai, India",
    github: "https://github.com/anjalikumari",
    linkedin: "https://linkedin.com/in/anjalikumari"
  };

  const technicalSkills = {
    languages: ["Java", "Python", "MySQL", "MongoDB"],
    frameworks: ["Spring Boot", "Kafka", "Kubernetes"],
    tools: ["Postman", "MySQL Workbench", "IntelliJ", "Git", "Docker"],
    concepts: ["Microservices Architecture", "API Development", "Database Management", "Cloud Technologies"]
  };

  const experience = [
    {
      company: "Walmart",
      location: "Chennai",
      position: "Software Developer - 1",
      duration: "March 2024 - Present",
      highlights: [
        "Leveraging Java and Spring Boot to design and implement software solutions for invoice data processing and storage, while ensuring data integrity through CosmosDB database migrations and developing distributed messaging systems with Apache Kafka.",
        "Collaborating with cross-functional teams to translate business needs into technical specifications, implemented container orchestration using Kubernetes for streamlined deployment and scalability, and ensured software quality through thorough testing and debugging."
      ]
    },
    {
      company: "Morgan Stanley",
      location: "Bengaluru",
      position: "Application Developer",
      duration: "Sep 2022 - March 2024",
      highlights: [
        "Developed an application for the Valuation Control Team, focusing on data retrieval and processing from diverse vendors.",
        "Utilized Scala and the Optimus development tool to create a user-friendly dashboard with efficient backend operations.",
        "Collaborated with stakeholders to define project scope and deliverables; conducted data analysis and implemented calculations in the Data Access Layer (DAL)."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech. in Electronics and Communication",
      institution: "Pranveer Singh Institute of Technology, Kanpur",
      cgpa: "8.6",
      duration: "June 2023"
    },
    {
      degree: "XII Science",
      institution: "Resonance International School, Muzaffarpur, Bihar",
      cgpa: "8.4",
      duration: "May 2019"
    }
  ];

  const projects = [
    {
      name: "FOODEASE - DELIVERY APPLICATION",
      technologies: ["MongoDB", "React", "Node.js", "Express.js"],
      description: "Developed a food delivery application featuring user authentication, dynamic pricing with coupon codes, and comprehensive cart functionalities. Utilized MongoDB, React, Node.js, and Express.js to create a seamless user experience for ordering food and tracking deliveries in real-time."
    },
    {
      name: "MOVIE RECOMMENDER SYSTEM",
      technologies: ["Python", "PyCharm", "Sklearn"],
      description: "Created a content-based movie recommendation system using Python, PyCharm, and Machine Learning techniques. Integrated the TMDB API for enhanced movie information, achieving a personalization score of 0.56."
    },
    {
      name: "LIFT SYSTEM DESIGN",
      technologies: ["Java", "Spring Boot"],
      description: "Engineered a sophisticated elevator control system using Java and Spring Boot, focusing on optimizing efficiency and user experience. Key features included real-time monitoring and fault detection, demonstrating proficiency in backend development and Java frameworks."
    }
  ];

  const achievements = [
    "LeetCode: 800+ problems solved | 1726+ contest ratings",
    "Mentor at Topmate: Recognized as the Top Mentor of the year 2024 and featured on the New York Billboard",
    "BNY Mellon CodeDivas2023: Rank under 200 in 25000 candidates"
  ];

  const certifications = [
    "Web Development Bootcamp - Udemy | July 2023",
    "Spring with Spring Boot - LinkedIn Learn | April 2023"
  ];

  const softSkills = ["Adaptable", "Communicator", "Public Speaker", "Influencer", "Team Player"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
                  <h2 className="text-xl text-blue-600 font-semibold mb-3">{personalInfo.title}</h2>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">{personalInfo.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Competencies & Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Code className="w-5 h-5 text-blue-500" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Award className="w-5 h-5 text-blue-500" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Work Experience */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Briefcase className="w-5 h-5 text-blue-500" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.position}</h3>
                    <p className="text-blue-600 font-medium">{job.company}, {job.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {job.duration}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                {index < experience.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Code className="w-5 h-5 text-blue-500" />
              Academic Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                {index < projects.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 text-sm">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>CGPA: {edu.cgpa}</span>
                    <span>{edu.duration}</span>
                  </div>
                  {index < education.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Award className="w-5 h-5 text-blue-500" />
                Certifications & Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Certifications</h4>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TechResume;
