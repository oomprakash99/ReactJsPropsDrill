# React Props Drilling Concept

## Project Overview
The primary goal of this project is to showcase:
- How to create a context using `createContext`
- How to provide and consume context values in React components
- Using `useState` to manage local state and passing it down through context

## Usage
- **Props Component**: The main component where the context (`pack`) is created. It provides values (`data`, `frameWork`, and `arrData`) to its children.
- **Call1 Component**: Consumes `data` and `frameWork` from the context to display them.
- **Call2 Component**: Consumes `arrData` from the context and renders it as a list.

### Example Output
On running the app, you should see:
- A greeting message in the `Props` component.
- The `Call1` component displaying `data` and `frameWork` values.
- The `Call2` component rendering each item in `arrData` as a list.

## Components
1. **Props**:
   - Creates the context using `createContext`.
   - Uses `useState` to manage and store `data`, `frameWork`, and `arrData` values.
   - Passes these values to the children components using `pack.Provider`.

2. **Call1**:
   - Consumes the `data` and `frameWork` values from the context.
   - Displays the values as part of the content.

3. **Call2**:
   - Consumes the `arrData` array from the context.
   - Maps over `arrData` to render each item in a list.

