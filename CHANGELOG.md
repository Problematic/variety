# Changelog

## [vNext]

### Added

- Range (`[number, number]`) argument for `rand`

## [v0.2.2] - 2017-03-21

### Added

- Add `randInt` to API

## [v0.2.1] - 2017-03-21

### Changed

- `sample` now accepts `ArrayLike<T>` instead of `T[]` as its first argument (this allows, for example, sampling from strings)
- correct formatting in CHANGELOG

## [v0.2.0] - 2017-03-21

### Added

- Add `shuffle` to API

### Changed

- [BREAKING] Move exported types to `types.ts` to clean up imports from lib

## [v0.1.2] - 2017-03-13

### Changed

- Update incorrect changelog version for v0.1.1
- Fix incorrect usage example in readme
- Add `repository` field to `package.json`
- Add installation instructions

## [v0.1.1] - 2017-03-13

### Changed

- Use a single-pass WRS algo [Efraimidis & Spirakis, 2005] for `sampleWeighted`

## [v0.1.0] - 2017-03-13

### Added

- Changelog
- `Map<number, TItem>` support for `sampleWeighted`

### Changed

- [BREAKING] Switch tuple order for `sampleWeighted` to `[item, weight]`, to match `Map` item order

## [v0.0.2] - 2017-03-12

### Added

- Test and build during `prepare` step to not publish an empty repo to npm

## [v0.0.1] - 2017-03-12

### Added

- Initial `variety` API: `rand`, `sample`, and `sampleWeighted`
