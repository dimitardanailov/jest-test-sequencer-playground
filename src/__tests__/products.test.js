describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    function filterByTerm(inputArr, searchTerm) {
      return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(searchTerm);
      });
    }

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
