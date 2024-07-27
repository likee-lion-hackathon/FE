import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../components/Navbar/Navbar";
import plus from "../assets/images/RegisterPet, ChoosePet/plus.svg";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 87vh; // navbar 13vh 뺀 나머지
    justify-content: space-between;
    align-items: center;
`
const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const MainText = styled.div`
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-top: 8vh;
`
const UploadButton = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22vh;
    height: 22vh;
    min-width: 200px;
    min-height: 200px;
    border-radius: 116.5px;
    background-color: #69D1DE;
    cursor: pointer;
    position: relative;
    overflow: hidden;
`;
const ImageInput = styled.input`
    display: none;
`;
const PlusIcon = styled.img`
    width: 70px;
    height: 70px;
    display: ${({ $show }) => ($show ? 'block' : 'none')};
`;
const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;
const InputBox = styled.div`
    display: flex;
    max-width: fit-content;
    height: 66px;
    padding: 20px 49px;
    align-items: center;
    border-radius: 100px;
    border: 1px solid #212121;
`
const InputText = styled.div`
    color: #212121;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.2px;
    margin-right: 18px;
`
const Input = styled.input`
    border: none;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;
    &:focus {
        outline: none;
    }
`
const InfoText = styled.div`
    color: #212121;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.2px;
    margin: 11px 0px 22px 0px;
`
const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-bottom: 12vh;
`
const MintBtn = styled.div`
    padding: 24px 61px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #69D1DE;

    color: white;
    font-size: 24px;
    font-weight: 700;
    line-height: 110%;
    cursor: pointer;
`
const WhiteBtn = styled.div`
    padding: 24px 61px;
    justify-content: center;
    align-items: center;
    border: 2px solid #69D1DE;
    border-radius: 100px;

    font-size: 24px;
    font-weight: 700;
    line-height: 110%;
    cursor: pointer;
`
const RegisterPet = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);


    //임시 데이터
    const response = {
        data:{
            url: "https://s3-alpha-sig.figma.com/img/8fcd/65d9/a4c3245bfdf0b26a01fb25d0f63a2469?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~XsnWk2x4fS6bogINT7r3jToFNSB32VG-pwBwlai-nGD5~lI~-HazNCKQdB7OcYU1~TLaYyyAI8lxfPcanilFNVrJHb4hsOKh2~8CmwZDTuK-xYB412F5Wuooz5nPM6Q1uaDi726QhttSG5Z0HHSB04g1bbcvfOgeEM6XKi3hqhfz7KCl9eoA9b7hw06wQReYl67kRYwP6a87BvELZ3QtkzzDn89D4Sf~rMBTgvi-3Z~ZBZh99n1bUMMIVN5TnXu7QCR0DwB~AF1pt-lpQl2dPIb6YWH~OmAnCXULSmLgroiU387YT5izqv-ePbX031DuCGStyZUAHvbZn6WSte~A__"
        }
    }

    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            //axios 코드

            setImage(response.data.url);
        } catch (e) {

        }

    };

    return (
        <>
            <Navbar/>
            <MainContainer>
                <MainText>추억을 함께 기록할 친구가 궁금해요</MainText>
                <UploadButton>
                    <PlusIcon src={plus} $show={!image}/>       {/*이미지가 등록되었으면 + 아이콘 안보이게*/}
                    {image && <ImagePreview src={image} alt="Uploaded Image" />}        {/*이미지가 등록되었으면 미리보기로 보여줌*/}
                    <ImageInput type="file" accept="image/*" onChange={handleImageUpload} />
                </UploadButton>
                <SubContainer>
                    <InputBox>
                        <InputText>이름</InputText>
                        <Input type='text' maxLength='10'/>
                    </InputBox>
                    <InfoText>* 1자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다</InfoText>
                    <InputBox>
                        <InputText>나이</InputText>
                        <Input type='number'/>
                    </InputBox>
                </SubContainer>
                <BtnContainer>
                    <MintBtn>기록하기</MintBtn>
                    <WhiteBtn onClick={() => {navigate('/diary');}}>취소하기</WhiteBtn>
                </BtnContainer>
            </MainContainer>
        </>
    );
}

export default RegisterPet;