import FormCategory from '@/components/layouts/forum-page/forum-category';
import RecentForum from '@/components/layouts/forum-page/recent-forum';

export default async function Forum() {
  return (
    <>
      <FormCategory />
      <RecentForum />
    </>
  );
}
