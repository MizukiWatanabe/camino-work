import dayjs from 'dayjs';

// 日付のフォーマット
export default function ConvertData({ convertDate }) {
  const publishedAt = dayjs(convertDate).format('YYYY/MM/DD');
  return (
    <time dateTime={convertDate} className="">
      {publishedAt}
    </time>
  );
}
