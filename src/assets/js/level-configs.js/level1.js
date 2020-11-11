function generateLevelOne ({
        obstacles: [
            {
                type: 'asteroid',
                time: 10,
                spawnPoint: { x:400, y:0 },
                intialVelocity: { x: randomXVelocity(), y: randomYVelocity() },
            }
        ]

    });