import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

import Board from "../board.js"

describe("Board", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Board squares ={Array(9).fill(null)} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)