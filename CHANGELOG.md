# Changelog

## [vNext]

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
