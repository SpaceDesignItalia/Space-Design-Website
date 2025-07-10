import { Icon } from "@iconify/react/dist/iconify.js";
import { useLanguage } from "../../../context/LanguageContext";

// Componente per le frecce SVG minimal
const ArrowIcon = () => (
  <Icon icon="fluent:arrow-sort-16-filled" className="w-6 h-6 text-gray-400" />
);

// Componente per il blocco di architettura minimal
const ArchitectureBlock = ({
  title,
  backgroundColor = "bg-gray-700",
  textColor = "text-white",
  className = "",
  delay = 0,
}: {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  delay?: number;
}) => (
  <div
    className={`
      ${backgroundColor} ${textColor}
      rounded-lg px-4 py-3
      transition-all duration-300 ease-out
      hover:scale-105
      ${className}
    `}
    style={{ animationDelay: `${delay}ms` }}
  >
    <p className="text-sm text-center">{title}</p>
  </div>
);

// Componente per il diagramma di architettura minimal
const ArchitectureDiagram = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Traditional Web */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-medium text-lg leading-8 text-gray-200">
              Traditional Web
            </h3>
            <div className="w-16 h-0.5 bg-gray-600 mx-auto"></div>
          </div>

          {/* Client */}
          <ArchitectureBlock
            title="Client"
            className="mx-auto w-28"
            delay={0}
          />

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowIcon />
          </div>

          {/* Web Server */}
          <ArchitectureBlock
            title="Web Server"
            backgroundColor="bg-gray-700"
            className="mx-auto w-32"
            delay={200}
          />

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowIcon />
          </div>

          {/* App Server */}
          <ArchitectureBlock
            title="App Server"
            backgroundColor="bg-gray-700"
            className="mx-auto w-32"
            delay={400}
          />

          {/* Arrows to DB and CDN */}
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <ArrowIcon />
              <ArchitectureBlock
                title="DB"
                backgroundColor="bg-gray-700"
                className="w-20"
                delay={600}
              />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ArrowIcon />
              <ArchitectureBlock
                title="CDN"
                backgroundColor="bg-gray-700"
                className="w-20"
                delay={800}
              />
            </div>
          </div>
        </div>

        {/* Jamstack */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-medium text-lg leading-8 text-gray-200">
              Jamstack
            </h3>
            <div className="w-16 h-0.5 bg-gray-500 mx-auto"></div>
          </div>

          {/* Client */}
          <ArchitectureBlock
            title="Client"
            backgroundColor="bg-gray-600"
            className="mx-auto w-28"
            delay={100}
          />

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowIcon />
          </div>

          {/* CDN */}
          <ArchitectureBlock
            title="CDN"
            backgroundColor="bg-gray-600"
            className="mx-auto w-28"
            delay={300}
          />

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowIcon />
          </div>

          {/* Microservices */}
          <ArchitectureBlock
            title="Microservices"
            backgroundColor="bg-gray-600"
            className="mx-auto w-32"
            delay={500}
          />
        </div>
      </div>
    </div>
  );
};

export default function WebsiteJamstack() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {t("web-jamstack-title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                {t("web-jamstack-description")}
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <ArchitectureDiagram />
          </div>
        </div>
      </div>
    </div>
  );
}
