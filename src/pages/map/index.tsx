import { dateOptions } from "@/config/date";
import locations from "@/config/locations";
import { randomValueFromArray } from "@/utils/random";
import slowNumberIncrease from "@/utils/slowNumberIncrease";
import useLocalStorage from "@/utils/useLocalStorage";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  cn,
} from "@heroui/react";
import Head from "next/head";
import { useState } from "react";

type Audit = {
  location: string;
  date: Date;
};

export default () => {
  const [pickedLocation, setPickedLocation] = useState<string>();
  const [loaderValue, setLoaderValue] = useState(0);
  const { value: audit, setValue: setAudit } =
    useLocalStorage<Audit[]>("mapAudit");
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    locations.map((i) => i.name),
  );

  const handleRandomizePress = async () => {
    setIsDisabled(true);
    await slowNumberIncrease(setLoaderValue);
    const location = randomValueFromArray(selectedLocations);
    setPickedLocation(location);
    setAudit([...(audit ? audit : []), { location, date: new Date() }]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoaderValue(0);
    setIsDisabled(false);
  };

  return (
    <>
      <Head>
        <title>Map - Phasmophobia Randomizers</title>
        <meta name="description" content="Randomize your Phasmophobia Maps" />
      </Head>
      <div className="flex items-center py-12 flex-col gap-10 px-8">
        <Accordion isCompact={true} variant="shadow" className="max-w-[550px]">
          <AccordionItem
            key="1"
            aria-label="Select available locations"
            title="Select available locations"
          >
            <CheckboxGroup
              defaultValue={locations.map((location) => location.name)}
              value={selectedLocations}
              onValueChange={setSelectedLocations}
              orientation="vertical"
              classNames={{
                wrapper: cn(
                  "grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]",
                ),
                base: cn("p-2"),
              }}
            >
              {locations
                .map((location) => location.name)
                .map((location) => (
                  <Checkbox value={location} key={location}>
                    {location}
                  </Checkbox>
                ))}
            </CheckboxGroup>
          </AccordionItem>
        </Accordion>
        <Card
          className="w-[240px] h-[240px] border-none bg-gradient-to-br from-yellow-500 to-orange-500"
          isPressable={!isDisabled}
          onPress={isDisabled ? () => null : handleRandomizePress}
          isHoverable={true}
          isDisabled={isDisabled}
          disableRipple={true}
        >
          <CardHeader>
            <h1 className="text-center w-full font-semibold text-large">
              Press to pick a random location!
            </h1>
          </CardHeader>
          <CardBody className="justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              showValueLabel={true}
              strokeWidth={4}
              value={loaderValue}
              aria-label="Fake randomization progress"
            />
          </CardBody>
        </Card>

        {pickedLocation && (
          <Chip
            classNames={{
              base: "border-1 border-white/30",
              content: "text-white/90 text-2xl font-semibold",
            }}
            color="secondary"
            variant="solid"
          >
            {pickedLocation}
          </Chip>
        )}

        {audit && audit.length > 0 && (
          <Table aria-label="Previous rolls">
            <TableHeader>
              <TableColumn>Location</TableColumn>
              <TableColumn>Date</TableColumn>
            </TableHeader>
            <TableBody>
              {audit.toReversed().map((item) => (
                <TableRow key={new Date(item.date).toString()}>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat(undefined, dateOptions).format(
                      new Date(item.date),
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
};
