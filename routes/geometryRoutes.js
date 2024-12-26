const express = require('express');
const router = express.Router();

// Helper functions for geometry calculations (implement these in a separate module or directly in this file)
const {
    calculate2DDistance,
    calculate3DDistance,
    calculateEquilateralTriangleArea,
    calculateEquilateralTrianglePerimeter,
    calculateIsoscelesTriangleArea,
    calculateIsoscelesTrianglePerimeter,
    calculateRightTriangleArea,
    calculateRightTriangleHypotenuse,
    calculateCubeVolume,
    calculateCubeSurfaceArea,
    calculateConeVolume,
    calculateConeSurfaceArea,
    calculateCircleArea,
    calculateCircleCircumference,
    calculateCylinderVolume,
    calculateCylinderSurfaceArea,
    calculateRectangleArea,
    calculateRectanglePerimeter,
    calculateSquareArea,
    calculateSquarePerimeter,
    calculateSphereVolume,
    calculateSphereSurfaceArea
} = require('../helpers/geometryHelpers'); // Assume you have a helper module for calculations

// 2D Distance Calculator
router.get('/2d-distance', (req, res) => {
    const { x1, y1, x2, y2 } = req.query;
    const distance = calculate2DDistance(+x1, +y1, +x2, +y2);
    res.json({ distance });
});

// 3D Distance Calculator
router.get('/3d-distance', (req, res) => {
    const { x1, y1, z1, x2, y2, z2 } = req.query;
    const distance = calculate3DDistance(+x1, +y1, +z1, +x2, +y2, +z2);
    res.json({ distance });
});

// Equilateral Triangle Calculator
router.get('/equilateral-triangle', (req, res) => {
    const { side } = req.query;
    const area = calculateEquilateralTriangleArea(+side);
    const perimeter = calculateEquilateralTrianglePerimeter(+side);
    res.json({ area, perimeter });
});

// Isosceles Triangle Calculator
router.get('/isosceles-triangle', (req, res) => {
    const { base, side } = req.query;
    const area = calculateIsoscelesTriangleArea(+base, +side);
    const perimeter = calculateIsoscelesTrianglePerimeter(+base, +side);
    res.json({ area, perimeter });
});

// Right-Angled Triangle Calculator
router.get('/right-angled-triangle', (req, res) => {
    const { base, height } = req.query;
    const area = calculateRightTriangleArea(+base, +height);
    const hypotenuse = calculateRightTriangleHypotenuse(+base, +height);
    res.json({ area, hypotenuse });
});

// Cube Calculator
router.get('/cube', (req, res) => {
    const { side } = req.query;
    const volume = calculateCubeVolume(+side);
    const surfaceArea = calculateCubeSurfaceArea(+side);
    res.json({ volume, surfaceArea });
});

// Cone Calculator
router.get('/cone', (req, res) => {
    const { radius, height } = req.query;
    const volume = calculateConeVolume(+radius, +height);
    const surfaceArea = calculateConeSurfaceArea(+radius, +height);
    res.json({ volume, surfaceArea });
});

// Circle Calculator
router.get('/circle', (req, res) => {
    const { radius } = req.query;
    const area = calculateCircleArea(+radius);
    const circumference = calculateCircleCircumference(+radius);
    res.json({ area, circumference });
});

// Cylinder Calculator
router.get('/cylinder', (req, res) => {
    const { radius, height } = req.query;
    const volume = calculateCylinderVolume(+radius, +height);
    const surfaceArea = calculateCylinderSurfaceArea(+radius, +height);
    res.json({ volume, surfaceArea });
});

// Rectangle Calculator
router.get('/rectangle', (req, res) => {
    const { length, width } = req.query;
    const area = calculateRectangleArea(+length, +width);
    const perimeter = calculateRectanglePerimeter(+length, +width);
    res.json({ area, perimeter });
});

// Square Calculator
router.get('/square', (req, res) => {
    const { side } = req.query;
    const area = calculateSquareArea(+side);
    const perimeter = calculateSquarePerimeter(+side);
    res.json({ area, perimeter });
});

// Sphere Calculator
router.get('/sphere', (req, res) => {
    const { radius } = req.query;
    const volume = calculateSphereVolume(+radius);
    const surfaceArea = calculateSphereSurfaceArea(+radius);
    res.json({ volume, surfaceArea });
});

module.exports = router;
