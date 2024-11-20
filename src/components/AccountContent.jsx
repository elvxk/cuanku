import Image from "next/image";

const AccountContent = async ({ user }) => {
  return (
    <div className="flex gap-4 self-start mt-4">
      <Image
        src={user.imageUrl}
        width={60}
        height={60}
        alt={user.username}
        draggable={false}
        className="border-2 border-black rounded-full object-cover"
      />
      <div
        className="flex flex-col justify-center items-start"
        data-aos="fade-left"
      >
        <h1 className="text-2xl font-cera font-bold">{user.username}</h1>
        <h1 className="font-cera font-bold">
          {user.firstName && user.firstName} {user.lastName && user.lastName}
        </h1>
      </div>
    </div>
  );
};

export default AccountContent;