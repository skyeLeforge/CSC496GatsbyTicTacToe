import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Square from "..board.js"
import Game from "../game.js"

//test the square function
describe("calculateWinner", () =>
  it("calculates correctly", () => {
    const squares = renderer.create(<Square />)
    const output = Game.calculateWinner(squares)
    expect(output).tobeNull
  })
)

