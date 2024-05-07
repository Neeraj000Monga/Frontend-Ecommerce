import  { useState } from "react";
import styled from "styled-components";
import BackspaceIcon from "@mui/icons-material/Backspace";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

function CosmeticNumberPad() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;

    if (!isNaN(value)) {
      setInputValue(value);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter number"
      />
      <ButtonContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, FiberManualRecordOutlinedIcon, 0].map(
          (number) => (
            <Button
              key={number}
              onClick={() => setInputValue((prev) => prev + number)}
            >
              {typeof number === "number" ? (
                number
              ) : (
                <FiberManualRecordOutlinedIcon
                  sx={{
                    borderRadius: "10px",
                    background: "black",
                    fontSize: "7px",
                  }}
                />
              )}
            </Button>
          )
        )}
        <Button onClick={() => setInputValue((prev) => prev.slice(0, -1))}>
          <BackspaceIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default CosmeticNumberPad;
