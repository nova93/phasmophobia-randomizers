import ghosts from "@/config/ghosts";
import { randomValueFromArray } from "@/utils/random";
import slowNumberIncrease from "@/utils/slowNumberIncrease";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Head from "next/head";
import { useState } from "react";

type Audit = {
  ghost: string;
  date: Date;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

export default () => {
  const [pickedGhost, setPickedGhost] = useState<string>();
  const [loaderValue, setLoaderValue] = useState(0);
  const [audit, setAudit] = useState<Audit[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleRandomizePress = async () => {
    setIsDisabled(true);
    await slowNumberIncrease(setLoaderValue);
    const ghost = randomValueFromArray(ghosts);
    setPickedGhost(ghost);
    setAudit([...audit, { ghost, date: new Date() }]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoaderValue(0);
    setIsDisabled(false);
  };
  return (
    <>
      <Head>
        <title>Ghost - Phasmophobia Randomizers</title>
        <meta name="description" content="Randomize your Phasmophobia Ghosts" />
      </Head>
      <div className="flex items-center py-12 flex-col gap-10">
        <Card
          className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500"
          isPressable={!isDisabled}
          onPress={isDisabled ? () => null : handleRandomizePress}
          isHoverable={true}
          isDisabled={isDisabled}
        >
          <CardHeader>
            <h1 className="text-center w-full font-semibold text-large">
              Press to randomize ghost!
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
            />
          </CardBody>
        </Card>

        {pickedGhost && (
          <Chip
            classNames={{
              base: "border-1 border-white/30",
              content: "text-white/90 text-2xl font-semibold",
            }}
            color="secondary"
            variant="solid"
          >
            {pickedGhost}
          </Chip>
        )}

        {audit.length > 0 && (
          <Table aria-label="Previous rolls" className="px-8">
            <TableHeader>
              <TableColumn>Ghost</TableColumn>
              <TableColumn>Date</TableColumn>
            </TableHeader>
            <TableBody>
              {audit.toReversed().map((item) => (
                <TableRow key={item.date.toString()}>
                  <TableCell>{item.ghost}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat(undefined, dateOptions).format(
                      item.date,
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
