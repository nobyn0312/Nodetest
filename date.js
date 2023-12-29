import { format , formatRelative ,subDays} from "date-fns";

const label =format(
  new Date(),
  "今日はyyy/MM/ddです"
  );
  console.log(label)

  // 3日前
  const relative =formatRelative(subDays(new Date(), 3), new Date())
  console.log(relative)