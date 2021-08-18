import { BrowserRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react';
import Home from "../components/Common/Home";
import ShuffleDeck from "../components/Tableau/Shuffle";

//Home render test
const HeaderMock = () => {
    return (
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
    );
}

describe("Background render test", () => {
    it('should render background', async () => {
        render( 
            <HeaderMock/>
        );
        const renderedBackground = await screen.findAllByTestId(`background-testid`);
        expect(renderedBackground).toBeTruthy();
    });
});

//Shuffle test
describe("Shuffle cards length test", () => {
    it('should return length of shuffled cards', async () => {
        const shuffledCards = ShuffleDeck();
        expect(shuffledCards.length).toEqual(104);
    });
});
