import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

import Game from "../game.js"

//check to see if board renders correctly
describe("Game", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Game />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)