type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      GenrePage, genre ID: {id} with name : {genre}
    </div>
  );
};

export default GenrePage;
