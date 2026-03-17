import Container from "./Container";

export default function Stats() {
  return (
    <div className="bg-white border-b">
      <Container>
        <div className="text-center py-8">
          
          {/* NUMBER */}
          <p className="text-[32px] md:text-[36px] font-bold text-blue-600">
            24/7
          </p>

          {/* LABEL */}
          <p className="text-[14px] md:text-[15px] text-gray-500">
            Support Available
          </p>

        </div>
      </Container>
    </div>
  );
}